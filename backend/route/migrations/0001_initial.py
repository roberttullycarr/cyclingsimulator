# Generated by Django 3.2.4 on 2021-07-07 13:05

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Route',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('distance', models.CharField(max_length=50)),
                ('average_grade', models.CharField(max_length=50)),
                ('elevation', models.CharField(max_length=50)),
                ('steepest_km', models.CharField(max_length=50)),
            ],
        ),
    ]
