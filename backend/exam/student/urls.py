from django.urls import path
from student import views

urlpatterns = [
    path('students-list/', views.StudentList.as_view()),
    path('get-student/<int:pk>', views.StudentDetails.as_view()),
    path('update-student/<int:pk>', views.StudentDetails.as_view()),
    path('delete-student/<int:pk>', views.StudentDetails.as_view()),
    path('register-student/', views.StudentDetails.as_view()),
    
    path('signup/', views.StudentRegistration.as_view()),
    path('getall/', views.StudentRegistration.as_view()),
    path('login/', views.UserLogin.as_view()),
    path('logout/', views.logoutUser),
    path('deactivate/', views.DeactivateUser.as_view()),

]
