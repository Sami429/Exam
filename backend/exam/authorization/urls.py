from django.urls import path
from authorization import views
from django.contrib.auth.decorators import login_required

urlpatterns = [
    path('signup/', views.StudentRegistration.as_view()),
    path('getall/', views.StudentRegistration.as_view()),
    path('login/', views.UserLogin.as_view()),
    path('logout/', views.UserLogout.as_view()),
    path('deactivate/', views.DeactivateUser.as_view()),
    path('reset-password/', views.ChangePassword.as_view()),
    path('get-user-details/', views.GetUserDetails.as_view()),
    path('update-user-details/', views.UpdateUserView.as_view()),
    path('get-student-list/', views.GetUserList.as_view()),
]