from cgi import test
from django.shortcuts import render
from .models import Course, SelectedAnswers, StudentCourse, Test, Question, TestAppeared  
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import CourseSerializer, SelectedAnswerSerializer, StudentCourseSerializer, TestAppearedSerializer, TestSerializer, QuestionSerializer

class CourseDetail(APIView):
    # ! Get all courses
    def get(self, request):
        course = Course.objects.all()  
        serializer = CourseSerializer(course, many=True)
        return Response(serializer.data)
    #  ! Get a particular course
    def get_object(self, pk):
        try:
            return Course.objects.get(course_name=pk)  
        except Course.DoesNotExist:  
            raise Http404
    #  ! Update a course
    def put(self, request, format=None):
        snippet = self.get_object(request.GET.get('course'))
        serializer = CourseSerializer(snippet, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    # ! Delete a course
    def delete(self, request, format=None):
        course = self.get_object(request.GET.get('course'))
        course.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    # ! Add a course
    def post(self, request, format=None):
        serializer = CourseSerializer(data=request.data, context={"request": request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class TestDetail(APIView):
    # ! Get all tests
    def get(self, request):
        test = Test.objects.all()  
        serializer = TestSerializer(test, many=True)
        return Response(serializer.data)
    #  ! Get a particular test
    def get_object(self, pk):
        try:
            return Test.objects.get(test_name=pk)  
        except Test.DoesNotExist:  
            raise Http404
    #  ! Update a test
    def put(self, request, format=None):
        snippet = self.get_object(request.data['test_name'])
        serializer = TestSerializer(snippet, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    # ! Delete a test
    def delete(self, request, format=None):
        test = self.get_object(request.GET.get('test'))
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
        test = Question.objects.all()  
        serializer = QuestionSerializer(test, many=True)
        return Response(serializer.data)
    #  ! Get a particular question
    def get_object(self, pk):
        try:
            return Question.objects.get(question=pk)  
        except Question.DoesNotExist:  
            raise Http404
    #  ! Update a question
    def put(self, request, format=None):
        snippet = self.get_object(request.GET.get('question'))
        serializer = QuestionSerializer(snippet, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    # ! Delete a question
    def delete(self, request, format=None):
        test = self.get_object(request.GET.get('question'))
        test.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    # ! Add a question
    def post(self, request, format=None):
        serializer = QuestionSerializer(data=request.data, context={"request": request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class StudentCourseView(APIView):
    # ! Get all the students registered in different courses
    def get(self, request):
        test = StudentCourse.objects.filter(student = request.user)
        serializer = StudentCourseSerializer(test, many = True)
        return Response(serializer.data)
    # ! Add a new student to a course
    def post(self, request, format=None):
        serializer = StudentCourseSerializer(data=request.data, context={"request": request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    # ! Get a particular row from the table
    def get_object(self, pk):
        try:
            return StudentCourse.objects.get(course=pk)  
        except StudentCourse.DoesNotExist:  
            raise Http404
    # ! Remove student from a course 
    def delete(self, request, format=None):
        course = Course.objects.get(course_name = request.GET.get('course', None))
        test = StudentCourse.objects.get(course_id = course.id) 
        test.delete()
        return Response(status=status.HTTP_204_NO_CONTENT) 

class TestAppearedView(APIView):
    # ! Get score of all the tests appeared by the student
    def get(self, request):
        test = TestAppeared.objects.filter(student = request.user)
        serializer = TestAppearedSerializer(test, many = True)
        return Response(serializer.data)
    # ! Create a new entry for a test appeared by the student 
    def post(self, request):
        serializer = TestAppearedSerializer(data = request.data, context = {'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class SelectedAnswersView(APIView):
    # ! Get the selected answers for a particular test for a particular user 
    def get(self, request, pk, format=None):
        snippet = SelectedAnswers.objects.filter(test=pk, student=request.user)
        serializer = SelectedAnswerSerializer(snippet, many = True)
        return Response(serializer.data)
    # ! Add a new answer for a particular question 
    def post(self, request):
        serializer = SelectedAnswerSerializer(data = request.data, context = {'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)