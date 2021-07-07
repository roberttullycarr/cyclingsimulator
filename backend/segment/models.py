from django.db import models
from route.models import Route


class Segment(models.Model):
    start = models.IntegerField(blank=False)
    end = models.IntegerField(blank=False)
    route = models.ForeignKey(to=Route, on_delete=models.CASCADE, blank=False, related_name='segments')
    average_grade = models.FloatField(max_length=50, blank=False)
    elevation = models.FloatField(blank=False)

    def __str__(self):
        return f'{self.start} to {self.end} meters of {self.route.name}'
