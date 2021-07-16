from rest_framework import serializers
from route.models import Route
from segment.models import Segment


class RouteNestedSegmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Segment
        fields = '__all__'


class RouteViewSerializer(serializers.ModelSerializer):
    segments = RouteNestedSegmentSerializer(many=True, read_only=True)

    class Meta:
        model = Route
        fields = '__all__'
