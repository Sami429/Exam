from django.contrib import admin
from .models import Course, Test, Question

@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    list_display = ['id' ,'course_name', 'creater_name']

@admin.register(Test)
class TestAdmin(admin.ModelAdmin):
    list_display = ['id' ,'test_name', 'test_duration', 'fk_course']

@admin.register(Question)
class QuestionAdmin(admin.ModelAdmin):
    list_display = ['id' ,'question', 'answer', 'option_a', 'option_b', 'option_c', 'option_d', 'fk_test']