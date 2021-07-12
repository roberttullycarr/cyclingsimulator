from django.urls import path
from .views import ListAllRoutes, ViewUpdateDeleteRoute, AddNewRoute

urlpatterns = [
    path('routes/', ListAllRoutes.as_view()),
    path('routes/<int:pk>/', ViewUpdateDeleteRoute.as_view()),
    path('routes/new/', AddNewRoute.as_view())
]
