from django.urls import path
from django.views import View
from .views import ListRecentSessions, CreateNewSession, RetrieveSessionByID

urlpatterns = [
    path('sessions/recent/', ListRecentSessions.as_view()),
    path('sessions/new/<int:pk>/', CreateNewSession.as_view()),
    path('session/<int:pk>/', RetrieveSessionByID.as_view())
]

