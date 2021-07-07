from django.urls import path
from django.views import View
from .views import ListAllSessions

urlpatterns = [
    path('sessions/', ListAllSessions.as_view())
]

