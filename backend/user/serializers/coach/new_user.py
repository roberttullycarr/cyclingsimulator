from rest_framework import serializers
from django.contrib.auth import get_user_model
import uuid

User = get_user_model()


class NewUserSerializer(serializers.ModelSerializer):

    def validate_password(self, value):
        password = str(uuid.uuid4())
        value.set_password(password)

    class Meta:
        model = User
        fields = [
            'id',
            'username',
            'email',
            'phone_number'
            'first_name',
            'last_name',
        ]
