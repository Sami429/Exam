from rest_framework import serializers
from phonenumber_field.serializerfields import PhoneNumberField
from .models import Student

class StudentSerializer(serializers.ModelSerializer):
    name = serializers.CharField(max_length = 256)
    phone_number = PhoneNumberField(region='IN')
    email = serializers.EmailField()
    active = serializers.BooleanField(default = True)
    roll_no = serializers.IntegerField()


    def create(self, valid_data):
        return Student.objects.create(**valid_data)

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.phone_number = validated_data.get('phone_number', instance.phone_number)
        instance.email = validated_data.get('email', instance.email)
        instance.roll_no = validated_data.get('roll_no', instance.roll_no)
        instance.active = validated_data.get('active', instance.active)
        instance.save()
        return instance


    class Meta:
        model = Student
        fields = '__all__'


# class LoginSerializer(serializers.Serializer):
    