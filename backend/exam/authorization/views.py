from asyncore import dispatcher
from functools import partial
from json.encoder import ESCAPE_DCT
from tkinter.tix import Tree
from django.shortcuts import render
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User, Group
from django.contrib.auth import authenticate, login, logout
from django.http import HttpResponse
from django.contrib.auth.hashers import make_password 
from django.utils.decorators import method_decorator
from django.contrib.auth.decorators import login_required
from .serializers import UserSerializer
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
        try:
            new_user.save()
            return Response({"status": status.HTTP_200_OK})
        except:
            return Response({'status': status.HTTP_400_BAD_REQUEST})

    def get(self, request):
        try:
            user = User.objects.filter(groups__name="Student").values()
            return Response(list(user))
        except:
            return Response({'status': status.HTTP_400_BAD_REQUEST})



class UserLogin(APIView):
    def post(self, request):
        # print(request.user)
        usr = request.data['username']
        passw = request.data['password']
        auth = authenticate(request, username = usr, password = passw)
        print(auth)
        if auth is not 'AnonymousUser':
            login(request, auth)
            # print(request.user)
            return Response({"status": status.HTTP_200_OK})
        else:
            return Response({"status": status.HTTP_401_UNAUTHORIZED})

# method_decorator(login_required, name='post')
class UserLogout(APIView):
    def post(self, request):
        print(request.user)
        try:
            logout(request)
            print(request.user)
            return Response({"status": status.HTTP_200_OK})
        except:
            return Response({{"status": status.HTTP_400_BAD_REQUEST}})

class DeactivateUser(APIView):
    def post(self, request):
        if request.user.groups.filter(name = "Staff").exists():
            usrname = request.data['username']
            user = User.objects.filter(username = usrname)
            user.update(is_active = False)
            return Response({"status": status.HTTP_200_OK})
        else:
            return Response({"status": status.HTTP_403_FORBIDDEN})

class ChangePassword(APIView):
    def put(self, request):
        user = User.objects.filter(username=request.user)
        user.password = make_password(request.data['new_password'])
        return Response({"status": status.HTTP_200_OK})

class GetUserDetails(APIView):
    def get(self, request):
        user = User.objects.filter(username = request.user)
        return Response(user.values())

class UpdateUserView(APIView):
    def put(self, request):
        user = User.objects.get(username = request.user)
        fname = request.data['fname']
        lname = request.data['lname']
        email = request.data['email']
        if fname:
            print(fname)
            user.first_name = fname
        if lname:
            print(lname)
            user.last_name = lname
        if email:
            print(email)
            user.email = email  
        try:
            user.save()
            return Response({"status": status.HTTP_200_OK})  
        except:
            return Response({'status': status.HTTP_400_BAD_REQUEST})    
        
class GetUserList(APIView):
    def get(self, request):
        try:
            user_list = User.objects.filter(groups__name = "Student")
            serializer = UserSerializer(user_list, many = True)
            return Response(serializer.data)
        except:
            return Response({'status': status.HTTP_400_BAD_REQUEST})
            