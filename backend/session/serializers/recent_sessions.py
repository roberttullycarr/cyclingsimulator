from rest_framework import serializers
from django.contrib.auth import get_user_model
from session.models import Session

User = get_user_model()


class NestedUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            'id',
            'first_name',
            'last_name',
            'avatar',
            'location',
            'is_coach',
            'is_superuser'
        ]


class RecentSessionSerializer(serializers.ModelSerializer):
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
