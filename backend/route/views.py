from rest_framework import filters
from rest_framework.generics import ListAPIView, RetrieveUpdateDestroyAPIView, CreateAPIView
from project_settings.permissions import IsCoach
from route.models import Route
from route.serializers.route_overview import RouteViewSerializer


class AddNewRoute(CreateAPIView):
    permission_classes = [IsCoach]
    serializer_class = RouteViewSerializer


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
