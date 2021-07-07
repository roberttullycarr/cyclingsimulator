from django.shortcuts import render
from rest_framework.generics import ListAPIView
from rest_framework.response import Response
from route.models import Route
from route.serializers.main_serializer import RouteSimulationSerializer


class SimulateRoute(ListAPIView):
    serializer_class = RouteSimulationSerializer
    queryset = Route.objects.all()
