from rest_framework.generics import CreateAPIView, RetrieveUpdateDestroyAPIView

from project_settings.permissions import IsCoach
from segment.models import Segment
from segment.serializers.new_segment import NewSegmentSerializer


class AddSegment(CreateAPIView):
    """
    post:
    Create a new segment

    Creates a new segment and relates it to a specific route. Route ID must be passed in the URL
    """
    serializer_class = NewSegmentSerializer
    permission_classes = [IsCoach]
    queryset = Segment.objects.all()

    def perform_create(self, serializer):
        serializer.save(route_id=self.kwargs['pk'])


class RetrieveUpdateDeleteSegment(RetrieveUpdateDestroyAPIView):
    """
    get:
    Retrieve a specific segment

    Route ID must be passed in the URL
    Body can be empty

    patch:
    Update a specific segment

    Update a segment by passing its ID in the URL. Body can include any info you wish to update.

    delete:
    Delete a specific segment

    Segment ID to be passed in the URL. Body is left empty.
    """
    serializer_class = NewSegmentSerializer
    permission_classes = [IsCoach]
    queryset = Segment.objects.all()
