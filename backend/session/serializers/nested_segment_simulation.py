from rest_framework import serializers
from segment.models import Segment
from session.models import Session
import math
from session.serializers.time_functions import seconds_to_time


class NestedSegmentSerializer(serializers.ModelSerializer):
    speed_in_km = serializers.SerializerMethodField(read_only=True)
    speed_in_m = serializers.SerializerMethodField(read_only=True)
    time = serializers.SerializerMethodField(read_only=True)
    distance = serializers.SerializerMethodField(read_only=True)

    def apply_calculations(self, obj):
        session_id = self.context.get('view').kwargs.get('pk')
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

    def get_distance(self, obj):
        distance = obj.end - obj.start
        return distance

    def get_time(self, obj):
        return seconds_to_time(self.get_distance(obj) / self.get_speed_in_m(obj))

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
