from rest_framework import serializers

from segment.models import Segment


class NewSegmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Segment
        fields = '__all__'
        read_only_fields = ['route']
