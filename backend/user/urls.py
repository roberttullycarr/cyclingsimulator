from django.urls import path
from user.coach_views.views import ListCoachClients, ListSpecificClient, AddNewClient, ListAllCoaches, AddNewCoach

urlpatterns = [
    path('coach/client/new/', AddNewClient.as_view()),
    path('coach/client/<int:pk>/', ListSpecificClient.as_view()),
    path('coach/clients/', ListCoachClients.as_view()),
    path('coaches/', ListAllCoaches.as_view()),
    path('coach/new/', AddNewCoach.as_view())
]
