# Generated by Django 4.1.2 on 2022-10-18 11:54

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("course", "0004_alter_test_fk_course"),
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
