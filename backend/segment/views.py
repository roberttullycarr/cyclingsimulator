from rest_framework.generics import CreateAPIView, RetrieveUpdateDestroyAPIView

from project_settings.permissions import IsCoach
from segment.serializers.new_segment import NewSegmentSerializer


class AddSegment(CreateAPIView):
    serializer_class = NewSegmentSerializer
    permission_classes = [IsCoach]


class RetrieveUpdateDeleteSegment(RetrieveUpdateDestroyAPIView):
    serializer_class = NewSegmentSerializer
    permission_classes = [IsCoach]
