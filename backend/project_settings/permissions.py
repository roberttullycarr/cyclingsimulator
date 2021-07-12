from rest_framework.permissions import BasePermission


class IsCoach(BasePermission):
    def has_permission(self, request, view):
        return request.user.is_coach


class IsCoachOrClient(BasePermission):
    def has_object_permission(self, request, view, obj):
        return request.user.is_coach or obj.client == request.user


class IsSuperUser(BasePermission):
    def has_permission(self, request, view):
        return request.user.is_superuser
