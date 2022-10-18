from django.urls import path
from staff import views

urlpatterns = [
    path('<int:pk>', views.StaffDetails.as_view()),
    path('register/', views.StaffDetails.as_view())
]

