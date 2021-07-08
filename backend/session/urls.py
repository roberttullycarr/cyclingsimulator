from django.urls import path
from django.views import View
from .views import ListRecentSessions, CreateNewSession

urlpatterns = [
    path('sessions/recent/', ListRecentSessions.as_view()),
    path('sessions/new/<int:pk>/', CreateNewSession.as_view()),
]

