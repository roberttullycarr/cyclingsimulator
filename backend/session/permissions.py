from rest_framework.permissions import BasePermission


class IsCoach(BasePermission):
    def has_permission(self, request, view):
        return request.user.is_coach
