from rest_framework import serializers

from session.models import Session


class YTDSessions(serializers.ModelSerializer):
    created = serializers.DateTimeField(format="%Y-%m-%d", read_only=True)

    class Meta:
        model = Session
        fields = ['created']
