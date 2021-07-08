from django.urls import path
from user.coach_views.views import ListCoachClients, ListSpecificClient, AddNewClient
from user.views import ListUserView


urlpatterns = [
    path('users/', ListUserView.as_view()),
    path('coach/client/new/', AddNewClient.as_view()),
    path('coach/client/<int:pk>/', ListSpecificClient.as_view()),
    path('coach/clients/', ListCoachClients.as_view())
]
