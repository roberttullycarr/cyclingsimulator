from rest_framework import serializers
from django.contrib.auth import get_user_model

from session.serializers.recent_sessions import RecentSessionSerializer

User = get_user_model()


class ClientListSerializer(serializers.ModelSerializer):
    number_of_sessions = serializers.SerializerMethodField()
    latest_session = serializers.SerializerMethodField()

    def get_number_of_sessions(self, obj):
        return obj.client_sessions.count()

    def get_latest_session(self, obj):
        session = obj.client_sessions.latest('created')
        return RecentSessionSerializer(session).data

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
            'latest_session'
        ]
