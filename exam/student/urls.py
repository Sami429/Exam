from django.urls import path
from student import views

urlpatterns = [
    path('students-list/', views.StudentList.as_view()),
    path('get-student/<int:pk>', views.StudentDetails.as_view()),
    path('update-student/<int:pk>', views.StudentDetails.as_view()),
    path('delete-student/<int:pk>', views.StudentDetails.as_view()),
    path('register-student/', views.StudentDetails.as_view()),
]
