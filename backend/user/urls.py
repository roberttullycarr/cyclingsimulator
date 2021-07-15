from django.urls import path
from user.views import ListCoachClients, ListSpecificClient, AddNewClient, ListAllCoaches, AddNewCoach, \
    LoggedInUserInfo

urlpatterns = [
    path('coach/client/new/', AddNewClient.as_view()),
    path('coach/client/<int:pk>/', ListSpecificClient.as_view()),
    path('coach/clients/', ListCoachClients.as_view()),
    path('coaches/', ListAllCoaches.as_view()),
    path('coach/new/', AddNewCoach.as_view()),
    path('me/', LoggedInUserInfo.as_view())
]
