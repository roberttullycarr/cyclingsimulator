from django.contrib.auth.hashers import make_password
from django.core.mail import send_mail
from rest_framework import status, filters
from rest_framework.generics import ListAPIView, RetrieveAPIView, RetrieveUpdateDestroyAPIView, CreateAPIView
from rest_framework.response import Response
from project_settings.permissions import IsCoach, IsCoachOrClient, IsSuperUser
from project_settings.settings import DEFAULT_FROM_EMAIL
from session.models import Session
from user.serializers.coach.coaches_list import CoachesListSerializer
from user.serializers.coach.list_clients import ClientListSerializer
from django.contrib.auth import get_user_model
from user.serializers.coach.new_user import NewUserSerializer

User = get_user_model()


# commented section will be implemented based on client preference regarding client interaction
class AddNewClient(CreateAPIView):
    permission_classes = [IsCoach]
    serializer_class = NewUserSerializer

    # def create(self, request, *args, **kwargs):
    #     try:
    #         email = self.request.data['email']
    #         if User.objects.filter(email__contains=email):
    #             return Response({'error': 'Email already registered before'}, status=status.HTTP_400_BAD_REQUEST)
    #         else:
    #             # Placeholder for username so that it's not empty
    #             username = email[:email.index("@")]
    #             new_user = User.objects.create(email=email, username=username)
    #             # password = str(uuid.uuid4())
    #             # new_user.set_password(password)
    #             # new_user.save()
    #             #
    #             # send_mail(
    #             #     'Energy Lab',
    #             #     f'Your password is: {password}\n'
    #             #     'Please reset it once you have logged in for the first time',
    #             #     DEFAULT_FROM_EMAIL,
    #             #     [email],
    #             #     fail_silently=False,
    #             # )
    #
    #             return Response(status=status.HTTP_201_CREATED)
    #     except KeyError:
    #         return Response({'email': 'this field is required'}, status=status.HTTP_400_BAD_REQUEST)


class ListCoachClients(ListAPIView):
    permission_classes = [IsCoach]
    serializer_class = ClientListSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['username', 'first_name', 'last_name', 'email', 'location']

    def get_queryset(self):
        return User.objects.get(id=self.request.user.id).clients.all()


class ListSpecificClient(RetrieveUpdateDestroyAPIView):
    permission_classes = [IsCoach]
    serializer_class = ClientListSerializer
    queryset = User.objects.all()


class AddNewCoach(CreateAPIView):
    serializer_class = CoachesListSerializer
    permission_classes = [IsSuperUser]
    queryset = User.objects.all()


class ListAllCoaches(ListAPIView):
    permission_classes = [IsCoach]
    serializer_class = CoachesListSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['username', 'first_name', 'last_name', 'email', 'location']

    def get_queryset(self):
        return User.objects.filter(is_coach=True)
