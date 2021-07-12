from rest_framework import serializers
from route.models import Route
from session.models import Session
from session.serializers.nested_segment_simulation import NestedSegmentSerializer
from session.serializers.time_functions import seconds_to_time, time_to_seconds


class RouteSimulationSerializer(serializers.ModelSerializer):
    segments = NestedSegmentSerializer(many=True, read_only=True)

    total_distance_in_km = serializers.SerializerMethodField()
    total_time = serializers.SerializerMethodField()
    average_speed = serializers.SerializerMethodField()
    total_kcal = serializers.SerializerMethodField()
    total_carbs_in_grams = serializers.SerializerMethodField()
    carb_energy_value = serializers.SerializerMethodField()
    number_of_drinks = serializers.SerializerMethodField()
    carbs_from_drink_in_grams = serializers.SerializerMethodField()
    carbs_needed_from_food = serializers.SerializerMethodField()
    slices_of_gingerbread = serializers.SerializerMethodField()

    def get_total_distance_in_km(self, obj):
        data = NestedSegmentSerializer(obj.segments.all(), many=True, context=self.context).data
        total_distance = sum(x['distance'] for x in data)/1000
        return total_distance

    def get_total_time(self, obj):
        data = NestedSegmentSerializer(obj.segments.all(), many=True, context=self.context).data
        time = sum(time_to_seconds(x['time']) for x in data)
        return seconds_to_time(time)

    def get_average_speed(self, obj):
        return 3600 / (time_to_seconds(self.get_total_time(obj)) / self.get_total_distance_in_km(obj))

    def calculate_nutrition(self, obj):
        result = {}
        session = Session.objects.get(id=self.context.get('view').kwargs.get('pk'))
        pat = session.pat
        weight = session.weight

        result['calories'] = (pat * (time_to_seconds(self.get_total_time(obj))) // 4180) * 4
        result['carbs'] = weight * (time_to_seconds(self.get_total_time(obj)) // 3600)
        result['carb_energy_value'] = result['carbs'] * 4
        result['drinks'] = time_to_seconds(self.get_total_time(obj)) // 3600
        result['carbs_from_drinks'] = result['drinks'] * 45
        result['carbs_from_food'] = result['carbs'] - result['carbs_from_drinks']
        result['slices_of_gingerbread'] = result['carbs_from_food'] // 15

        return result

    def get_total_kcal(self, obj):
        return self.calculate_nutrition(obj)['calories']

    def get_total_carbs_in_grams(self, obj):
        return self.calculate_nutrition(obj)['carbs']

    def get_carb_energy_value(self, obj):
        return self.calculate_nutrition(obj)['carb_energy_value']

    def get_number_of_drinks(self, obj):
        return self.calculate_nutrition(obj)['drinks']

    def get_carbs_from_drink_in_grams(self, obj):
        return self.calculate_nutrition(obj)['carbs_from_drinks']

    def get_carbs_needed_from_food(self, obj):
        return self.calculate_nutrition(obj)['carbs_from_food']

    def get_slices_of_gingerbread(self, obj):
        return self.calculate_nutrition(obj)['slices_of_gingerbread']

    class Meta:
        model = Route
        fields = [
            'id',
            'name',
            'average_grade',
            'elevation',
            'steepest_km',
            'total_distance_in_km',
            'total_time',
            'average_speed',
            'total_kcal',
            'total_carbs_in_grams',
            'carb_energy_value',
            'number_of_drinks',
            'carbs_from_drink_in_grams',
            'carbs_needed_from_food',
            'slices_of_gingerbread',
            'segments'
        ]
