from rest_framework.generics import ListCreateAPIView

from session.models import Session
from session.serializers.main_serializer import SessionCreationSerializer


class CreateNewSession(ListCreateAPIView):
    serializer_class = SessionCreationSerializer
    queryset = Session.objects.all()