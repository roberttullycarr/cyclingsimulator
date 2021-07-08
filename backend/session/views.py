from django.db.models import Q
from rest_framework.generics import ListAPIView, CreateAPIView
from project_settings.permissions import IsCoach
from session.models import Session
from session.serializers.new_session import NewSessionSerializer
from session.serializers.recent_sessions import RecentSessionSerializer
from django.contrib.auth import get_user_model

User = get_user_model()


class CreateNewSession(CreateAPIView):
    permission_classes = [IsCoach]
    serializer_class = NewSessionSerializer
    queryset = Session.objects.all()

    def perform_create(self, serializer):
        coach = self.request.user
        client_id = self.kwargs['pk']

        # assign coach in user model for references in other requests
        client = User.objects.get(id=client_id)
        client.coach = coach
        client.save()

        serializer.save(coach=coach, client=client)


class ListRecentSessions(ListAPIView):
    serializer_class = RecentSessionSerializer

    def get_queryset(self):
        return Session.objects.filter(Q(client=self.request.user) | Q(coach=self.request.user)).order_by('-created')[:5]
