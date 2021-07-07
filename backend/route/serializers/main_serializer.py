from rest_framework import serializers
from segment.models import Segment
from route.models import Route
from session.models import Session
import math
from sympy import solve, simplify
from sympy.abc import x
import datetime


class NestedSegmentSerializer(serializers.ModelSerializer):
    speed_in_km = serializers.SerializerMethodField()
    speed_in_m = serializers.SerializerMethodField()
    time = serializers.SerializerMethodField()
    distance = serializers.SerializerMethodField()
    segment = serializers.SerializerMethodField()

    def apply_calculations(self, obj):
        session = Session.objects.get(id=1)
        cyclist_weight = session.weight
        bike_weight = session.bike_weight
        gravity = 9.81
        pat = session.pat
        mass = cyclist_weight + bike_weight
        tire_pressure = session.tire_pressure
        wind_adjust = session.wind_condition
        rider_position = session.rider_position
        efficiency_ratio = 0.95
        grade = obj.average_grade / 100
        elevation = obj.elevation
        acceleration = 0

        frol = mass * gravity * tire_pressure * math.sqrt(1 - (grade ** 2))
        fhelling = mass * gravity * grade
        faccel = mass * acceleration

        a = 1
        b = wind_adjust * 2
        c = (((2 * frol) + (2 * fhelling) + (2 * faccel)) +
             (elevation * rider_position * wind_adjust * wind_adjust ** 2)) / (elevation * rider_position)
        d = ((2 * pat * efficiency_ratio) / (elevation * rider_position)) * -1

        result = solve((a * x**3) + (b * x**2) + (c * x + d), x)

        return result

    def get_speed_in_km(self, obj):
        return float(self.apply_calculations(obj)[0]*3.6)

    def get_speed_in_m(self, obj):
        return float(self.apply_calculations(obj)[0])

    def get_time(self, obj):
        time = self.get_distance(obj)/self.get_speed_in_m(obj)/86400
        seconds = time * 60 * 60
        minutes, seconds = divmod(seconds, 60)
        hours, minutes = divmod(minutes, 60)
        return "%02d:%02d:%02d" % (hours, minutes, seconds)

    def get_distance(self, obj):
        distance = obj.end - obj.start
        return distance

    def get_segment(self, obj):
        return f'{obj.start} - {obj.end}'

    class Meta:
        model = Segment
        fields = [
            'segment',
            'distance',
            'average_grade',
            'speed_in_km',
            'speed_in_m',
            'time'
        ]


class RouteSimulationSerializer(serializers.ModelSerializer):
    segments = NestedSegmentSerializer(many=True, read_only=True)

    class Meta:
        model = Route
        fields = '__all__'

