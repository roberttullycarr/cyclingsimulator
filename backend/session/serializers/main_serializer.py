from rest_framework import serializers
from session.models import Session


class SessionCreationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Session
        fields = '__all__'
