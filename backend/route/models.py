from django.db import models


def route_directory_path(instance, filename):
    return f'{instance.name}/{filename}'


class Route(models.Model):
    name = models.CharField(max_length=100, blank=False)
    location = models.CharField(max_length=100, blank=True)
    avatar = models.ImageField(upload_to=route_directory_path, blank=True, null=True)
    banner = models.ImageField(upload_to=route_directory_path, blank=True, null=True)
    distance = models.FloatField(blank=False)
    average_grade = models.FloatField(blank=False)
    elevation = models.IntegerField(blank=False)
    steepest_km = models.FloatField(blank=False)

    def __str__(self):
        return f'{self.name}'
