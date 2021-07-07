from django.db import models


class Route(models.Model):
    name = models.CharField(max_length=100, blank=False)
    distance = models.CharField(max_length=50, blank=False)
    average_grade = models.CharField(max_length=50, blank=False)
    elevation = models.FloatField(max_length=50, blank=False)
    steepest_km = models.CharField(max_length=50, blank=False)

    def __str__(self):
        return f'{self.name}'
