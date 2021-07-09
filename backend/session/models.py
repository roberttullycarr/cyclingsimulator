from django.db import models
from django.contrib.auth import get_user_model

from route.models import Route

User = get_user_model()


class Session(models.Model):
    client = models.ForeignKey(to=User, related_name='client_sessions', blank=False, on_delete=models.CASCADE)
    coach = models.ForeignKey(to=User, related_name='coach_sessions', blank=False, on_delete=models.CASCADE)
    weight = models.IntegerField(blank=False)
    height = models.IntegerField(blank=False)
    pat = models.IntegerField(blank=False)
    bike_weight = models.IntegerField(blank=True, default=7)
    bike_type = models.FloatField(max_length=10, choices=[(0.95, 'Race Bike'), (0.92, 'Normal Bike')], default=0.95)

    tire_pressure = models.FloatField(blank=False,
                                      choices=[
                                          (0.0075, 3.5),
                                          (0.007, 4),
                                          (0.0065, 4.5),
                                          (0.0061, 5),
                                          (0.0058, 5.5),
                                          (0.0056, 6),
                                          (0.0054, 6.5),
                                          (0.0053, 7),
                                          (0.0051, 7.5),
                                          (0.0049, 8),
                                          (0.0047, 8.5),
                                          (0.0045, 9)
                                      ], default=0.0053)

    wind_condition = models.FloatField(blank=False,
                                       choices=[
                                           (0, 0),
                                           (0.833333333, 3),
                                           (1.666666667, 6),
                                           (2.5, 9),
                                           (-0.833333333, -3),
                                           (-1.666666667, -6),
                                           (-2.5, -9)
                                       ], default=0)

    rider_position = models.FloatField(blank=False, default=0.29833857)

    routes = models.ManyToManyField(to=Route, blank=True, related_name='sessions')

    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'Session #{self.id} - Client: {self.client.first_name} {self.client.last_name}'
