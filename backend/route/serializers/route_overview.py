from rest_framework import serializers

from route.models import Route


class RouteViewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Route
        fields = '__all__'
