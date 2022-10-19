from multiprocessing import context
from rest_framework import serializers
from .models import Course, Test, Question


class CourseSerializer(serializers.Serializer):
    course_name = serializers.CharField(max_length=256)
    creater_name = serializers.CharField(max_length=256)

    def create(self, valid_data):
        return Course.objects.create(**valid_data)

    def update(self, instance, validated_data):
        instance.course_name = (
            validated_data.get("course_name", instance.course_name),
        )
        instance.creater_name = validated_data.get(
            "creater_name", instance.creater_name
        )
        instance.save()
        return instance

    class Meta:
        model = Course
        fields = "__all__"


class TestSerializer(serializers.Serializer):
    test_name = serializers.CharField(max_length=256)
    test_duration = serializers.DurationField()
    fk_course = CourseSerializer(read_only=True)

    def create(self, valid_data):
        request = self.context["request"]
        fk_course_id = request.data.get("fk_course_id")
        test_obj = Test(**valid_data)
        test_obj.fk_course_id = fk_course_id
        test_obj.save()
        return test_obj

    def update(self, instance, validated_data):
        instance.test_name = (validated_data.get("test_name", instance.test_name),)
        instance.test_duration = validated_data.get(
            "test_duration", instance.test_duration
        )
        instance.save()
        return instance

    class Meta:
        model = Test
        fields = "__all__"


class QuestionSerializer(serializers.Serializer):
    question = serializers.CharField()
    option_a = serializers.CharField()
    option_b = serializers.CharField()
    option_c = serializers.CharField()
    option_d = serializers.CharField()
    answer = serializers.CharField()
    fk_test = TestSerializer(read_only=True)

    def create(self, valid_data):
        request = self.context["request"]
        fk_test_id = request.data.get("fk_test_id")
        test_obj = Question(**valid_data)
        test_obj.fk_test_id = fk_test_id
        test_obj.save()
        return test_obj

    def update(self, instance, validated_data):
        instance.question = (validated_data.get("question", instance.question),)
        instance.option_a = (validated_data.get("option_a", instance.option_a),)
        instance.option_b = (validated_data.get("option_b", instance.option_b),)
        instance.option_c = (validated_data.get("option_c", instance.option_c),)
        instance.option_d = (validated_data.get("option_d", instance.option_d),)
        instance.answer = validated_data.get("answer", instance.answer)
        instance.save()
        return instance
