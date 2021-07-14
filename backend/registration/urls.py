from django.urls import path
from .views import PasswordReset, Validation

urlpatterns = [
    path('auth/password-reset/', PasswordReset.as_view()),
    path('auth/password-reset/validation/', Validation.as_view())
]
