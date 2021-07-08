from rest_framework import serializers

from segment.models import Segment


class NewSegmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Segment
        fields = '__all__'
