# Generated by Django 4.1.2 on 2022-10-18 11:32

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("course", "0002_rename_fk_course_id_test_fk_course_and_more"),
    ]

    operations = [
        migrations.AlterField(
            model_name="test",
            name="fk_course",
            field=models.ForeignKey(
                blank=True,
                null=True,
                on_delete=django.db.models.deletion.CASCADE,
                to="course.course",
            ),
        ),
    ]
