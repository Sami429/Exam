from django.db import models
from phonenumber_field.modelfields import PhoneNumberField

class Staff(models.Model):
    staff_name = models.CharField(max_length = 256, null = False, blank = False)
    phone_number = PhoneNumberField(blank=False, null = False, unique = True)
    email = models.EmailField(null = False, blank = False)
    staff_no = models.BigIntegerField(null = False, blank = False)
    active = models.BooleanField(default = True, null = False, blank = False)

    def __str__(self):
        return self.staff_name

    class Meta:
        unique_together = ('phone_number', 'email', 'staff_no')