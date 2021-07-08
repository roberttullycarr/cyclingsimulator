from django.contrib.auth.hashers import make_password
from django.core.mail import send_mail
from rest_framework import status, filters
from rest_framework.generics import ListAPIView, RetrieveAPIView, RetrieveUpdateDestroyAPIView, CreateAPIView
from rest_framework.response import Response
from project_settings.permissions import IsCoach, IsCoachOrClient
from project_settings.settings import DEFAULT_FROM_EMAIL
from session.models import Session
from user.serializers.coach.list_clients import ClientListSerializer
from django.contrib.auth import get_user_model
import uuid

User = get_user_model()


class AddNewClient(CreateAPIView):
    permission_classes = [IsCoach]
    serializer_class = ClientListSerializer

    def create(self, request, *args, **kwargs):
        try:
            email = self.request.data['email']
            if User.objects.filter(email__contains=email):
                return Response({'error': 'Email already registered before'}, status=status.HTTP_400_BAD_REQUEST)
            else:
                # Placeholder for username so that it's not empty
                placeholder = email[:email.index("@")]
                new_user = User.objects.create(email=email, username=placeholder, is_coach=True)
                password = str(uuid.uuid1())
                new_user.set_password(password)
                new_user.save()

                send_mail(
                    'Energy Lab',
                    f'Your password is: {password}',
                    DEFAULT_FROM_EMAIL,
                    [email],
                    fail_silently=False,
                )

                return Response(status=status.HTTP_201_CREATED)
        except KeyError:
            return Response({'email': 'this field is required'}, status=status.HTTP_400_BAD_REQUEST)


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
