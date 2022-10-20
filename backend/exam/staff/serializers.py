from rest_framework import serializers
from phonenumber_field.serializerfields import PhoneNumberField
from .models import Staff

class StaffSerializer(serializers.ModelSerializer):
    staff_name = serializers.CharField(max_length = 256)
    phone_number = PhoneNumberField(region='IN')
    email = serializers.EmailField()
    staff_no = serializers.IntegerField()
    active = serializers.BooleanField(default = True)

    def create(self, valid_data):
        return Staff.objects.create(**valid_data)

    def update(self, instance, valid_data):
        instance.staff_name = valid_data.get('staff_name', instance.staff_name)
        instance.phone_number = valid_data.get('phone_number', instance.phone_number)
        instance.email = valid_data.get('email', instance.email)
        instance.staff_no = valid_data.get('staff_no', instance.staff_no)
        instance.active = valid_data.get('active', instance.active)

        instance.save()
        return instance
        
    class Meta:
        model = Staff
        fields = '__all__'