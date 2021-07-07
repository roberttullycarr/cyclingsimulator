from django.urls import path
from django.views import View
from .views import SimulateRoute

urlpatterns = [
    path('simulate/', SimulateRoute.as_view())
]
