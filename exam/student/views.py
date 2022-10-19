from distutils.ccompiler import new_compiler
from django.shortcuts import render
from .models import Student
from .serializers import StudentSerializer
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User, Group
from django.contrib.auth import authenticate, login, logout
from django.http import HttpResponse

class StudentList(APIView):
    def get(self, request, format=None):
        snippets = Student.objects.all()
        serializer = StudentSerializer(snippets, many=True)
        return Response(serializer.data)


class StudentDetails(APIView):
    def get_object(self, pk):
        try:
            return Student.objects.get(roll_no=pk)
        except Student.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        snippet = self.get_object(pk)
        serializer = StudentSerializer(snippet)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        snippet = self.get_object(pk)
        serializer = StudentSerializer(snippet, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        student = self.get_object(pk)
        student.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    def post(self, request, format=None):
        serializer = StudentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class StudentRegistration(APIView):
    def post(self, request):
        username = request.POST.get("username")
        fname = request.POST.get("fname")
        lname = request.POST.get("lname")
        email = request.POST.get("email")
        password = request.POST.get("password")
        group = request.POST.get("group")
        new_user = User.objects.create_user(username, email, password)
        new_user.first_name = fname
        new_user.last_name = lname
        grouped = Group.objects.get(name=group)
        new_user.groups.add(grouped)
        new_user.save()
        return Response({"status": status.HTTP_201_CREATED})

    def get(self, request):
        user = User.objects.filter(groups__name="Student").values()
        return Response(list(user))


class UserLogin(APIView):
    def post(self, request):
        usr = request.POST.get("username")
        passw = request.POST.get("password")
        auth = authenticate(username=usr, password=passw)
        if auth:
            login(request, auth)
            return Response({"status": status.HTTP_200_OK})
        else:
            return Response({"status": status.HTTP_401_UNAUTHORIZED})



def logoutUser(request):
    logout(request)
    return HttpResponse({"status": status.HTTP_200_OK})
