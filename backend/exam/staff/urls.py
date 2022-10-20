from django.urls import path
from staff import views

urlpatterns = [
    path('get-staff/<int:pk>', views.StaffDetails.as_view()),
    path('update-staff/<int:pk>', views.StaffDetails.as_view()),
    path('delete-staff/<int:pk>', views.StaffDetails.as_view()),
    path('register-staff/', views.StaffDetails.as_view())
]

