from django.urls import path
from course import views

urlpatterns = [ 
    # ! Course URLS 
    path('course/course-list/', views.CourseDetail.as_view()),
    path('course/update-course/<int:pk>', views.CourseDetail.as_view()),
    path('course/delete-course/<int:pk>', views.CourseDetail.as_view()),
    path('course/create-course/', views.CourseDetail.as_view()),
    # ! Test URLS
    path('test/test-list/', views.TestDetail.as_view()),
    path('test/update-test/<int:pk>', views.TestDetail.as_view()),
    path('test/delete-test/<int:pk>', views.TestDetail.as_view()),
    path('test/create-test/', views.TestDetail.as_view()),
    #  ! Question URLS
    path('question/question-list/', views.QuestionDetail.as_view()),
    path('question/update-question/<int:pk>', views.QuestionDetail.as_view()),
    path('question/delete-question/<int:pk>', views.QuestionDetail.as_view()),
    path('question/create-question/', views.QuestionDetail.as_view()),
]