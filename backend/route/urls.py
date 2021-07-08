from django.urls import path
from django.views import View
from .views import SimulateRoute, ListAllRoutes, ViewUpdateDeleteRoute, AddNewRoute

urlpatterns = [
    path('routes/simulate/', SimulateRoute.as_view()),
    path('routes/overview/', ListAllRoutes.as_view()),
    path('routes/view/<int:pk>/', ViewUpdateDeleteRoute.as_view()),
    path('routes/new/', AddNewRoute.as_view())
]
