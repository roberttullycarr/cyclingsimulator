from django.shortcuts import render
from rest_framework import filters
from rest_framework.generics import ListAPIView, RetrieveUpdateDestroyAPIView, CreateAPIView
from rest_framework.response import Response
from project_settings.permissions import IsCoach
from route.models import Route
from route.serializers.route_overview import RouteViewSerializer
from route.serializers.simulation_serializer import RouteSimulationSerializer


class AddNewRoute(CreateAPIView):
    permission_classes = [IsCoach]
    serializer_class = RouteViewSerializer


class SimulateRoute(ListAPIView):
    permission_classes = [IsCoach]
    serializer_class = RouteSimulationSerializer
    queryset = Route.objects.all()


class ListAllRoutes(ListAPIView):
    permission_classes = [IsCoach]
    serializer_class = RouteViewSerializer
    queryset = Route.objects.all()
    filter_backends = [filters.SearchFilter]
    search_fields = ['name']


class ViewUpdateDeleteRoute(RetrieveUpdateDestroyAPIView):
    permission_classes = [IsCoach]
    serializer_class = RouteViewSerializer
    queryset = Route.objects.all()
