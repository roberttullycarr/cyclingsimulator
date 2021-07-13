# Generated by Django 3.2.4 on 2021-07-08 08:34

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('session', '0002_session_client'),
    ]

    operations = [
        migrations.AddField(
            model_name='session',
            name='coach',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='coach_sessions', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='session',
            name='client',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='client_sessions', to=settings.AUTH_USER_MODEL),
        ),
    ]