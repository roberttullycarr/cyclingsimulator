# Generated by Django 3.2.4 on 2021-07-09 16:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('route', '0005_auto_20210709_1803'),
    ]

    operations = [
        migrations.AlterField(
            model_name='route',
            name='distance',
            field=models.FloatField(),
        ),
    ]