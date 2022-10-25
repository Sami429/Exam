from django.shortcuts import render
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User, Group
from django.contrib.auth import authenticate, login, logout
from django.http import HttpResponse
from django.contrib.auth.hashers import make_password 
from django.contrib.auth.decorators import permission_required


class StudentRegistration(APIView):
    def post(self, request):
        username = request.data["username"]
        fname = request.data["fname"]
        lname = request.data["lname"]
        email = request.data["email"]
        password = request.data["password"]
        group = request.data["group"]
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
    def get(self,request):
        return render(request, 'login.html')

    def post(self, request):
        print(request.user)
        usr = request.data['username']
        passw = request.data['password']
        auth = authenticate(request, username = usr, password = passw)
        if auth is not None:
            login(request, auth)
            print(request.user)
            return HttpResponse({"status": status.HTTP_200_OK})
        else:
            return HttpResponse({"status": status.HTTP_401_UNAUTHORIZED})


def userLogout(request):
    logout(request)
    print(request.user)
    return HttpResponse({"status": status.HTTP_200_OK})

class DeactivateUser(APIView):
    def post(self, request):
        if request.user.groups.filter(name = "Staff").exists():
            usrname = request.data['username']
            user = User.objects.filter(username = usrname)
            user.is_active = False
            user.update()
            return Response({"status": status.HTTP_200_OK})
        else:
            return Response({"status": status.HTTP_403_FORBIDDEN})

class ChangePassword(APIView):
    def put(self, request):
        user = User.objects.filter(username=request.user)
        user.password = make_password(request.data['new_password'])
        return Response({"status": status.HTTP_200_OK})

