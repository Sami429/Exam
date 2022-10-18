from django.contrib import admin
from.models import Staff

@admin.register(Staff)
class StaffAdmin(admin.ModelAdmin):
    list_display = ['id', 'staff_name', 'phone_number', 'email', 'staff_no', 'active']