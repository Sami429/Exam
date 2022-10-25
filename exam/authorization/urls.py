from django.urls import path
from authorization import views

urlpatterns = [
    path('signup/', views.StudentRegistration.as_view()),
    path('getall/', views.StudentRegistration.as_view()),
    path('login/', views.UserLogin.as_view()),
    path('logout/', views.userLogout),
    path('deactivate/', views.DeactivateUser.as_view()),
    path('reset-password/', views.ChangePassword.as_view()),
]