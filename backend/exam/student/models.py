from enum import unique
from unicodedata import name
from django.db import models
from phonenumber_field.modelfields import PhoneNumberField


class Student(models.Model):
    name = models.CharField(max_length = 256, null = False, blank = False)
    phone_number = PhoneNumberField(blank=False, null = False, unique = True)
    email = models.EmailField(null = False, blank = False, unique = True)
    active = models.BooleanField(default = True, null = False, blank = False)
    roll_no = models.IntegerField(null = False, blank = False, unique = True)

    def __str__(self):
        return self.name

    class Meta:
        unique_together = ('phone_number', 'email', 'roll_no')
        