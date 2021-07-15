# Generated by Django 3.2.4 on 2021-07-08 13:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('route', '0002_alter_route_elevation'),
        ('session', '0004_alter_session_coach'),
    ]

    operations = [
        migrations.AddField(
            model_name='session',
            name='routes',
            field=models.ManyToManyField(blank=True, null=True, related_name='sessions', to='route.Route'),
        ),
    ]
