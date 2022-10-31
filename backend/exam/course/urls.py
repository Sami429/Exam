from django.urls import path
from course import views

urlpatterns = [ 
    # ! Course URLS 
    path('course/course-list/', views.CourseDetail.as_view()),
    path('course/update-course', views.CourseDetail.as_view()),
    path('course/delete-course', views.CourseDetail.as_view()),
    path('course/create-course/', views.CourseDetail.as_view()),
    # ! Test URLS
    path('test/test-list/', views.TestDetail.as_view()),
    path('test/update-test/', views.TestDetail.as_view()),
    path('test/delete-test', views.TestDetail.as_view()),
    path('test/create-test/', views.TestDetail.as_view()),
    #  ! Question URLS
    path('question/question-list/', views.QuestionDetail.as_view()),
    path('question/update-question/', views.QuestionDetail.as_view()),
    path('question/delete-question', views.QuestionDetail.as_view()),
    path('question/create-question/', views.QuestionDetail.as_view()),
    # ! Student Course URLS 
    path('student-course/add-student-course/', views.StudentCourseView.as_view()),
    path('student-course/get-student-course/', views.StudentCourseView.as_view()),
    path('student-course/delete-student-course', views.StudentCourseView.as_view()),
    # ! Student Test URLS 
    path('student-test/add-student-test/', views.TestAppearedView.as_view()),
    path('student-test/get-student-test/', views.TestAppearedView.as_view()),
    # ! Student Answers URLS 
    path('student-answer/add-student-answer/', views.SelectedAnswersView.as_view()),
    path('student-answer/get-student-answer/<int:pk>', views.SelectedAnswersView.as_view()),
]