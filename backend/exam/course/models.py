from enum import unique
from wsgiref.validate import validator
from django.db import models
from django.core.exceptions import ValidationError


def answer_validator(option):
    if option in ["option_a", "option_b", "option_c", "option_d"]:
        return option
    else:
        raise ValidationError("Invalid value")


class Course(models.Model):
    course_name = models.CharField(max_length=256, null=False, blank=False, unique=True)
    creater_name = models.CharField(max_length=256, null=False, blank=False)

    def __str__(self):
        return self.course_name


class Test(models.Model):
    test_name = models.CharField(max_length=256, null=False, blank=False, unique=True)
    test_duration = models.DurationField(null=False, blank=False)
    fk_course = models.ForeignKey(Course, on_delete=models.CASCADE)

    def __str__(self):
        return self.test_name


class Question(models.Model):
    question = models.TextField(max_length=600, null=False, blank=False, unique=True)
    option_a = models.TextField(max_length=600, null=False, blank=False)
    option_b = models.TextField(max_length=600, null=False, blank=False)
    option_c = models.TextField(max_length=600, null=False, blank=False)
    option_d = models.TextField(max_length=600, null=False, blank=False)
    answer = models.TextField(max_length=600, validators=[answer_validator])
    fk_test = models.ForeignKey(Test, on_delete=models.CASCADE)

    def __str__(self):
        return self.question
