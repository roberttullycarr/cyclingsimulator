from django.urls import path
from .views import ListRecentSessions, CreateNewSession, RetrieveSessionByID, SimulateRoutes, ListAllSessions, \
    RecentSessionsSpecificUser, ListSessionStatistics

urlpatterns = [
    path('sessions/recent/', ListRecentSessions.as_view()),
    path('sessions/recent/<int:pk>/', RecentSessionsSpecificUser.as_view()),
    path('sessions/', ListAllSessions.as_view()),
    path('sessions/statistics/', ListSessionStatistics.as_view()),
    path('sessions/new/<int:pk>/', CreateNewSession.as_view()),
    path('session/<int:pk>/', RetrieveSessionByID.as_view()),
    path('session/simulation/<int:pk>/', SimulateRoutes.as_view()),
]
