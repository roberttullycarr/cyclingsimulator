from rest_framework import serializers
from django.contrib.auth import get_user_model
import uuid

User = get_user_model()


class NewUserSerializer(serializers.ModelSerializer):
    number_of_sessions = serializers.SerializerMethodField()

    def get_number_of_sessions(self, obj):
        return obj.client_sessions.count()

    def validate_password(self, value):
        password = str(uuid.uuid4())
        value.set_password(password)

    class Meta:
        model = User
        fields = [
            'id',
            'username',
            'email',
            'first_name',
            'last_name',
            'avatar',
            'phone_number',
            'number_of_sessions'
        ]
