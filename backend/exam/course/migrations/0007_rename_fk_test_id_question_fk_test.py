# Generated by Django 4.1.2 on 2022-10-19 05:34

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("course", "0006_alter_test_fk_course"),
    ]

    operations = [
        migrations.RenameField(
            model_name="question",
            old_name="fk_test_id",
            new_name="fk_test",
        ),
    ]
