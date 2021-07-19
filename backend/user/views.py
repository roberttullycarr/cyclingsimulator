from django.contrib.auth.hashers import make_password
from django.core.mail import send_mail
from rest_framework import filters
from rest_framework.generics import ListAPIView, RetrieveUpdateDestroyAPIView, CreateAPIView, RetrieveAPIView
from rest_framework.pagination import LimitOffsetPagination
from project_settings.permissions import IsCoach, IsSuperUser
from project_settings.settings import DEFAULT_FROM_EMAIL
from user.serializers.coaches_list import CoachesListSerializer
from user.serializers.list_clients import ClientListSerializer
from django.contrib.auth import get_user_model
from user.serializers.new_coach import NewCoachSerializer

User = get_user_model()


# commented section will be implemented based on client preference regarding client interaction
class AddNewClient(CreateAPIView):
    """
    post: Add a new client

    This action can only be performed by a coach
    Request body includes:
    - first_name: **required**
    - last_name: **required**
    - location:
    - avatar:
    - email: **required**
    - phone_number:
    """
    permission_classes = [IsCoach]
    serializer_class = ClientListSerializer

    def perform_create(self, serializer):
        random_password = User.objects.make_random_password()
        email = self.request.data['email']
        serializer.save(password=make_password(random_password), username=email)


class ListClients(ListAPIView):
    """
    get: List clients of logged in coach

    Get all clients associated with logged in coach.

    Adding **/?search=searchText** to the URL will return results based on the filtering text. Filtering is done
    based on username, first name, last name, email or location

    Limit and Offset pagination example:
    - **limit=25&offset=0**
    """
    permission_classes = [IsCoach]
    pagination_class = LimitOffsetPagination
    serializer_class = ClientListSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['username', 'first_name', 'last_name', 'email', 'location']
    queryset = User.objects.filter(is_coach=False)


class ListSpecificClient(RetrieveUpdateDestroyAPIView):
    """
    get: View a client's profile

    Client ID must be passed in URL

    patch: Update client details

    Client ID must be passed in URL

    delete: Remove a client's profile

    Client ID must be passed in URL
    """
    permission_classes = [IsCoach]
    serializer_class = ClientListSerializer
    queryset = User.objects.all()


class AddNewCoach(CreateAPIView):
    serializer_class = NewCoachSerializer
    permission_classes = [IsSuperUser]
    queryset = User.objects.all()

    def perform_create(self, serializer):
        random_password = User.objects.make_random_password()
        email = self.request.data['email']
        serializer.save(password=make_password(random_password), is_coach=True, username=email)

        send_mail(
            'Login Credentials',
            f'Login ID: {email}\n'
            f'Password: {random_password}',
            DEFAULT_FROM_EMAIL,
            [email],
            fail_silently=False,
        )


class ListAllCoaches(ListAPIView):
    """
    get: List all coaches

    Adding **/?search=searchText** to the URL will return results based on the filtering text. Filtering is done
    based on username, first name, last name, email or location

    Limit and Offset pagination example:
    - **limit=25&offset=0**
    """
    permission_classes = [IsCoach]
    pagination_class = LimitOffsetPagination
    serializer_class = CoachesListSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['username', 'first_name', 'last_name', 'email', 'location']

    def get_queryset(self):
        return User.objects.filter(is_coach=True)


class LoggedInUserInfo(RetrieveAPIView):
    serializer_class = CoachesListSerializer

    def get_object(self):
        return User.objects.get(id=self.request.user.id)
