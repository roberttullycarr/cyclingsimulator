# Generated by Django 3.2.4 on 2021-07-09 10:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('route', '0002_alter_route_elevation'),
        ('session', '0005_session_routes'),
    ]

    operations = [
        migrations.AlterField(
            model_name='session',
            name='routes',
            field=models.ManyToManyField(blank=True, related_name='sessions', to='route.Route'),
        ),
    ]