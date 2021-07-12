from django.db.models import Q
from rest_framework.generics import ListAPIView, CreateAPIView, RetrieveAPIView, UpdateAPIView
from rest_framework.pagination import LimitOffsetPagination
from project_settings.permissions import IsCoach
from session.models import Session
from session.serializers.coach_statistics import YTDSessions
from session.serializers.new_session import NewSessionSerializer
from session.serializers.recent_sessions import RecentSessionSerializer
from django.contrib.auth import get_user_model
from session.serializers.simulations import SessionSimulationSerializer

User = get_user_model()


class CreateNewSession(CreateAPIView):
    """
    post: Create a new session

    **URL must include the client's ID**

    Request body example:
    - weight: **Integer field**
    - height: **Integer field**
    - pat: **Integer field**
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
    get: List most recent sessions for logged in user

    This view returns the last 5 sessions per user. It works for both coaches as well as clients, meaning
    it would return the last 5 sessions for a coach, or a client. This is determined by the sender of the request.

    Request body can be left empty.
    """
    serializer_class = RecentSessionSerializer

    def get_queryset(self):
        return Session.objects.filter(Q(client=self.request.user) | Q(coach=self.request.user)).order_by('-created')[:5]


class RecentSessionsSpecificUser(ListAPIView):
    """
    get: List most recent sessions for a specific user

    Pass user ID to the URL
    """
    serializer_class = RecentSessionSerializer

    def get_queryset(self):
        return Session.objects.filter(client_id=self.kwargs['pk']).order_by('-created')[:5]


class ListAllSessions(ListAPIView):
    serializer_class = RecentSessionSerializer
    pagination_class = LimitOffsetPagination

    def get_queryset(self):
        search = self.request.query_params.get('search')
        if not search:
            return Session.objects.filter(Q(client=self.request.user) | Q(coach=self.request.user))
        else:
            return Session.objects.filter(Q(client__first_name__icontains=search) |
                                          Q(client__last_name__icontains=search) |
                                          Q(coach__first_name__icontains=search) |
                                          Q(coach__last_name__icontains=search))


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

    Request body example:
    - weight: **Integer field**
    - height: **Integer field**
    - pat: **Integer field**
    - bike_weight: **Integer field*** default is set to 7, if no weight is provided
    - bike_type: **Float field** must either be **0.95** for a race bike, or **0.92** for a normal bike
    - tire_pressure: **Float field**
    - wind_condition: **Float field**
    - rider_position: **Float field**
    - routes: **This field must be an array, in which the IDs of the simulation routes are included**.
    """
    serializer_class = SessionSimulationSerializer
    queryset = Session.objects.all()

    def perform_update(self, serializer):
        serializer.save(routes=self.request.data['routes'])


class ListSessionStatistics(ListAPIView):
    serializer_class = YTDSessions

    def get_queryset(self):
        return Session.objects.filter(coach=self.request.user).order_by('-created')
