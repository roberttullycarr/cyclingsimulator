from rest_framework import serializers
from django.contrib.auth import get_user_model

User = get_user_model()


class ClientListSerializer(serializers.ModelSerializer):
    number_of_sessions = serializers.SerializerMethodField()

    def get_number_of_sessions(self, obj):
        return obj.client_sessions.count()

    class Meta:
        model = User
        fields = [
            'id',
            'full_name',
            'first_name',
            'last_name',
            'coaches',
            'email',
            'about',
            'location',
            'phone_number',
            'avatar',
            'number_of_sessions',
            'is_coach'
        ]
