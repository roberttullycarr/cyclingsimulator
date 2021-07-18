# Generated by Django 3.2.4 on 2021-07-18 08:17

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('session', '0002_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='session',
            name='coach',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='coach_sessions', to=settings.AUTH_USER_MODEL),
        ),
    ]