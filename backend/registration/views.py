from rest_framework import status
from rest_framework.generics import CreateAPIView, UpdateAPIView
from rest_framework.permissions import AllowAny
from .models import Registration
from django.contrib.auth import get_user_model
from rest_framework.response import Response
from django.core.mail import send_mail
from project_settings.settings import DEFAULT_FROM_EMAIL
from .serializers.registration import RegistrationSerializer, PasswordSerializer


User = get_user_model()


class PasswordReset(CreateAPIView):
    """
    Password reset

    Body must only contain a valid email address. User will receive an email containing a verification code.
    """
    permission_classes = [AllowAny]

    def create(self, request, *args, **kwargs):
        email = self.request.data['email']
        # First ensure that the user is registered
        if User.objects.filter(email=email):

            if Registration.objects.filter(user_id__email=email):
                instance = Registration.objects.get(user=User.objects.get(email=email))
            else:
                instance = Registration.objects.create(user=User.objects.get(email=email))

            # password_reset is a model method that generates a new number in case of password reset
            instance.password_reset()
            instance.save()

            send_mail(
                'Energy Lab password reset',
                f'Your verification code is: {instance.code}',
                DEFAULT_FROM_EMAIL,
                [email],
                fail_silently=False,
            )

            return Response(status=status.HTTP_200_OK)
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)


# This works for both new user registration and password reset
class Validation(UpdateAPIView):
    """
    Reset user password

    For /auth/password-reset/validate/, body must contain:
    - email
    - password
    - password_repeat
    - code
    """
    permission_classes = [AllowAny]
    serializer_class = PasswordSerializer

    def update(self, request, *args, **kwargs):

        email = self.request.data['email']

        if not Registration.objects.filter(user_id__email=email):
            return Response(status=status.HTTP_400_BAD_REQUEST)
        else:
            # instance definition below matches User profile with Registration profile based on Primary Key
            reg_profile = Registration.objects.get(user_id__email=email)
            instance = User.objects.get(id=reg_profile.user_id)
            serializer = self.get_serializer(instance, data=request.data, partial=False)
            serializer.is_valid(raise_exception=True)
            self.perform_update(serializer)
            return Response(status=status.HTTP_200_OK)
