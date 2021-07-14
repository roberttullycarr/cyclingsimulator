from rest_framework import filters
from rest_framework.generics import ListAPIView, RetrieveUpdateDestroyAPIView, CreateAPIView
from rest_framework.pagination import LimitOffsetPagination
from project_settings.permissions import IsCoach
from route.models import Route
from route.serializers.route_overview import RouteViewSerializer, RouteSegmentsSerializer


class AddNewRoute(CreateAPIView):
    """
    post: Create a new route

    This action can only be performed by a coach
    Request body includes:
    - name: **required**
    - location:
    - avatar:
    - banner:
    - distance: **required float field**
    - average_grade: **required float field**
    - elevation: **required integer field**
    - steepest_km: **required float field**
    """
    permission_classes = [IsCoach]
    serializer_class = RouteViewSerializer


class ListAllRoutes(ListAPIView):
    """
    get: View all existing routes

    Limit and Offset pagination example:
    - **limit=25&offset=0**
    """
    permission_classes = [IsCoach]
    pagination_class = LimitOffsetPagination
    serializer_class = RouteViewSerializer
    queryset = Route.objects.all()
    filter_backends = [filters.SearchFilter]
    search_fields = ['name', 'location']


class ViewUpdateDeleteRoute(RetrieveUpdateDestroyAPIView):
    """
    get = View a route's details

    Pass route ID in the URL

    patch: Update a route

    Pass route ID in the URL

    delete: Delete a route

    Pass route ID in the URL
    """
    permission_classes = [IsCoach]
    serializer_class = RouteSegmentsSerializer
    queryset = Route.objects.all()
