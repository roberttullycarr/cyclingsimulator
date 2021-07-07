from rest_framework.generics import ListCreateAPIView, ListAPIView
from session.models import Session
from session.permissions import IsCoach
from session.serializers.main_serializer import SessionCreationSerializer


class ListAllSessions(ListAPIView):
    serializer_class = SessionCreationSerializer
    permission_classes = [IsCoach]
    queryset = Session.objects.all()
