from rest_framework import serializers
from session.models import Session
from session.serializers.recent_sessions import NestedUserSerializer


class NewSessionSerializer(serializers.ModelSerializer):
    client = NestedUserSerializer(read_only=True)
    coach = NestedUserSerializer(read_only=True)
    created = serializers.DateTimeField(format="%d-%m-%Y %H:%M", read_only=True)

    class Meta:
        model = Session
        fields = [
            'id',
            'coach',
            'client',
            'weight',
            'height',
            'pat',
            'created',
        ]
        read_only_fields = ['coach', 'client', 'id']
