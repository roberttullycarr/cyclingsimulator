from rest_framework import serializers
from segment.models import Segment
from route.models import Route
from session.models import Session
import math


class NestedSegmentSerializer(serializers.ModelSerializer):
    speed_in_km = serializers.SerializerMethodField()
    speed_in_m = serializers.SerializerMethodField()
    time = serializers.SerializerMethodField()
    distance = serializers.SerializerMethodField()
    segment = serializers.SerializerMethodField()

    def apply_calculations(self, obj):
        session_id = self.context['request'].parser_context['kwargs']['pk']
        session = Session.objects.get(id=session_id)

        cyclist_weight = session.weight
        bike_weight = session.bike_weight
        efficiency_ratio = session.bike_type
        pat = session.pat
        mass = cyclist_weight + bike_weight
        tire_pressure = session.tire_pressure
        wind_adjust = session.wind_condition
        rider_position = session.rider_position

        grade = obj.average_grade / 100
        elevation = obj.elevation

        # fixed values
        gravity = 9.81
        acceleration = 0

        frol = mass * gravity * tire_pressure * math.sqrt(1 - (grade ** 2))
        fhelling = mass * gravity * grade
        faccel = mass * acceleration

        a = 1
        b = wind_adjust * 2
        c = (((2 * frol) + (2 * fhelling) + (2 * faccel)) +
             (elevation * rider_position * wind_adjust * wind_adjust ** 2)) / (elevation * rider_position)
        d = ((2 * pat * efficiency_ratio) / (elevation * rider_position)) * -1

        p = (c / a) - ((b ** 2) / (3 * a ** 2))
        q = (d / a) + (((2 * b ** 3) - (9 * a * b * c)) / (27 * a ** 3))

        x = (b * -1) / (3 * a)
        y = (q * -1) / 2
        z = ((p ** 3) / 27) + ((q ** 2) / 4)

        z_sqrt = math.sqrt(z)
        cd_plus = y + z_sqrt
        cd_minus = y - z_sqrt

        cardano_one = cd_plus ** (1 / 3)
        cardano_two = cd_minus ** (1 / 3)

        cardano = cardano_one + -cardano_two.real * 2 + x

        return cardano

    def get_speed_in_km(self, obj):
        return self.apply_calculations(obj) * 3.6

    def get_speed_in_m(self, obj):
        return self.apply_calculations(obj)

    def get_time(self, obj):
        time = self.get_distance(obj) / self.get_speed_in_m(obj) / 3600
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
        fields = [
            'id',
            'name',
            'average_grade',
            'elevation',
            'steepest_km',
            'segments',
        ]


class SessionSimulationSerializer(serializers.ModelSerializer):
    routes = RouteSimulationSerializer(many=True, read_only=True)

    class Meta:
        model = Session
        fields = [
            'id',
            'weight',
            'height',
            'pat',
            'bike_weight',
            'bike_type',
            'rider_position',
            'wind_condition',
            'tire_pressure',
            'routes',
        ]
        read_only_fields = ['id']
