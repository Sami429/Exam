from django.shortcuts import render
from .models import Course, Test, Question  # type: ignore
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import CourseSerializer, TestSerializer, QuestionSerializer

class CourseDetail(APIView):
    # ! Get all courses
    def get(self, request):
        course = Course.objects.all()  # type: ignore
        serializer = CourseSerializer(course, many=True)
        return Response(serializer.data)
    #  ! Get a particular course
    def get_object(self, pk):
        try:
            return Course.objects.get(id=pk)  # type: ignore
        except Course.DoesNotExist:  # type: ignore
            raise Http404
    #  ! Update a course
    def put(self, request, pk, format=None):
        snippet = self.get_object(pk)
        serializer = CourseSerializer(snippet, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    # ! Delete a course
    def delete(self, request, pk, format=None):
        course = self.get_object(pk)
        course.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    # ! Add a course
    def post(self, request, format=None):
        serializer = CourseSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class TestDetail(APIView):
    # ! Get all tests
    def get(self, request):
        test = Test.objects.all()  # type: ignore
        serializer = TestSerializer(test, many=True)
        return Response(serializer.data)
    #  ! Get a particular test
    def get_object(self, pk):
        try:
            return Test.objects.get(id=pk)  # type: ignore
        except Test.DoesNotExist:  # type: ignore
            raise Http404
    #  ! Update a test
    def put(self, request, pk, format=None):
        snippet = self.get_object(pk)
        serializer = TestSerializer(snippet, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    # ! Delete a test
    def delete(self, request, pk, format=None):
        test = self.get_object(pk)
        test.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    # ! Add a test
    def post(self, request, format=None):
        serializer = TestSerializer(data=request.data, context={"request": request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class QuestionDetail(APIView):
    # ! Get all questions
    def get(self, request):
        test = Question.objects.all()  # type: ignore
        serializer = QuestionSerializer(test, many=True)
        return Response(serializer.data)
    #  ! Get a particular question
    def get_object(self, pk):
        try:
            return Question.objects.get(id=pk)  # type: ignore
        except Question.DoesNotExist:  # type: ignore
            raise Http404
    #  ! Update a question
    def put(self, request, pk, format=None):
        snippet = self.get_object(pk)
        serializer = QuestionSerializer(snippet, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    # ! Delete a question
    def delete(self, request, pk, format=None):
        test = self.get_object(pk)
        test.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    # ! Add a question
    def post(self, request, format=None):
        serializer = QuestionSerializer(data=request.data, context={"request": request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
