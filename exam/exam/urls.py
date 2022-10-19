from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('students/', include('student.urls')),
    path('staff/', include('staff.urls')),
    path('courses/', include('course.urls')),
    ]
