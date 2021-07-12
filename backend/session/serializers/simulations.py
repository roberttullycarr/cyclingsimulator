from rest_framework import serializers
from session.models import Session
from session.serializers.nested_route_simulation import RouteSimulationSerializer


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
