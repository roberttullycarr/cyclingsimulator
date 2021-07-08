from django.urls import path
from .views import ListRecentSessions, CreateNewSession, RetrieveSessionByID, SimulateRoutes

urlpatterns = [
    path('sessions/recent/', ListRecentSessions.as_view()),
    path('sessions/new/<int:pk>/', CreateNewSession.as_view()),
    path('session/<int:pk>/', RetrieveSessionByID.as_view()),
    path('session/simulation/<int:pk>/', SimulateRoutes.as_view()),
]
