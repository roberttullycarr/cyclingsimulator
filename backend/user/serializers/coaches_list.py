from rest_framework import serializers
from django.contrib.auth import get_user_model

User = get_user_model()


class CoachesListSerializer(serializers.ModelSerializer):
    number_of_clients = serializers.SerializerMethodField()
    number_of_sessions = serializers.SerializerMethodField()

    def get_number_of_clients(self, obj):
        return obj.clients.count()

    def get_number_of_sessions(self, obj):
        return obj.coach_sessions.count()

    class Meta:
        model = User
        fields = [
            'id',
            'email',
            'first_name',
            'last_name',
            'location',
            'phone_number',
            'clients',
            'is_coach',
            'is_superuser',
            'avatar',
            'number_of_clients',
            'number_of_sessions',
        ]
