# Generated by Django 4.1.2 on 2022-10-28 11:24

import course.models
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('course', '0009_testappeared_studentcourse_selectedanswers'),
    ]

    operations = [
        migrations.AlterField(
            model_name='course',
            name='creater_name',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='question',
            name='answer',
            field=models.TextField(max_length=600, null=True, validators=[course.models.answer_validator]),
        ),
        migrations.AlterField(
            model_name='selectedanswers',
            name='selected_answer',
            field=models.TextField(max_length=600),
        ),
    ]
