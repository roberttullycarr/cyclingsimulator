from rest_framework import serializers

from session.models import Session


class NewSessionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Session
        fields = '__all__'
        read_only_fields = ['coach', 'client']
