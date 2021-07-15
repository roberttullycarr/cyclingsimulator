# Generated by Django 3.2.4 on 2021-07-09 13:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('session', '0006_alter_session_routes'),
    ]

    operations = [
        migrations.AlterField(
            model_name='session',
            name='bike_type',
            field=models.FloatField(choices=[(0.95, 'Race Bike'), (0.92, 'Normal Bike')], default='race', max_length=10),
        ),
    ]
