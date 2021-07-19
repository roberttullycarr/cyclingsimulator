from rest_framework import serializers
from django.contrib.auth import get_user_model

User = get_user_model()


class NewCoachSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = [
            'id',
            'first_name',
            'last_name',
            'location',
            'email',
            'is_coach',
            'phone_number',
            'is_superuser',
            'avatar',

        ]
