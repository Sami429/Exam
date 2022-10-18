from django.urls import path
from student import views

urlpatterns = [
    path('students-list', views.StudentList.as_view()),
    path('<int:pk>', views.StudentDetails.as_view()),
    path('register', views.StudentDetails.as_view()),
]
