from rest_framework import serializers
from django.contrib.auth import get_user_model
from session.models import Session

User = get_user_model()


class RecentSessionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Session
        fields = '__all__'
