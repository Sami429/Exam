# Generated by Django 4.1.2 on 2022-11-01 05:23

from django.conf import settings
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('course', '0012_alter_course_creater_name'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='studentcourse',
            unique_together={('student', 'course')},
        ),
    ]
