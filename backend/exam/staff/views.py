from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import status
from .models import Staff
from .serializers import StaffSerializer
from rest_framework.response import Response
from django.http import Http404


class StaffDetails(APIView):
    def get_object(self, pk):
        try:
            return Staff.objects.get(staff_no=pk)
        except Staff.DoesNotExist:
            raise Http404
    
    def get(self, request, pk, format = None):
        snippet = self.get_object(pk)
        serializer = StaffSerializer(snippet)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        snippet = self.get_object(pk)
        serializer = StaffSerializer(snippet, data=request.data, partial = True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        staff = self.get_object(pk)
        staff.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    def post(self, request, format=None):
        serializer = StaffSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
