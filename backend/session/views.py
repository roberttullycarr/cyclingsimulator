from django.db.models import Q
from rest_framework.generics import ListAPIView, CreateAPIView, RetrieveAPIView, UpdateAPIView
from rest_framework.pagination import LimitOffsetPagination
from project_settings.permissions import IsCoach
from session.models import Session
from session.serializers.new_session import NewSessionSerializer
from session.serializers.recent_sessions import RecentSessionSerializer
from django.contrib.auth import get_user_model
from session.serializers.simulations import SessionSimulationSerializer

User = get_user_model()


class CreateNewSession(CreateAPIView):
    """
    post: Create a new session
    """
    permission_classes = [IsCoach]
    serializer_class = NewSessionSerializer
    queryset = Session.objects.all()

    def perform_create(self, serializer):
        coach = self.request.user
        client_id = self.kwargs['pk']

        # Add client to coach's client list
        client = User.objects.get(id=client_id)
        coach.clients.add(client)
        coach.save()

        serializer.save(coach=coach, client=client)


class ListRecentSessions(ListAPIView):
    """
    get: List most recent sessions

    This view returns the last 5 sessions per user. It works for both coaches as well as clients, meaning
    it would return the last 5 sessions for a coach, or a client. This is determined by the sender of the request.

    Request body can be left empty.
    """
    serializer_class = RecentSessionSerializer
    pagination_class = LimitOffsetPagination

    def get_queryset(self):
        return Session.objects.filter(Q(client=self.request.user) | Q(coach=self.request.user)).order_by('-created')[:5]


class RetrieveSessionByID(RetrieveAPIView):
    """
    get: View a specific session

    This returns a specific session, by passing the session ID in the URL.
    Request body can be left empty.
    """
    serializer_class = RecentSessionSerializer
    queryset = Session.objects.all()


class SimulateRoutes(UpdateAPIView):
    """
    patch: Simulate routes per session

    The route simulation calculations are determined based on the data passed in the body of this patch requests.
    For example, if you pass an array containing the IDs of the routes you want to simulate, you get the results
    for these routes only.

    Other information can also be edited in the request body.
    """
    serializer_class = SessionSimulationSerializer
    pagination_class = LimitOffsetPagination
    queryset = Session.objects.all()

    def perform_update(self, serializer):
        serializer.save(routes=self.request.data['routes'])
