from django.urls import path
from django.views import View
from .views import CreateNewSession

urlpatterns = [
    path('sessions/new/', CreateNewSession.as_view())
]

