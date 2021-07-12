from django.urls import path
from segment.views import AddSegment, RetrieveUpdateDeleteSegment

urlpatterns = [
    path('segments/new/<int:pk>/', AddSegment.as_view()),
    path('segment/<int:pk>/', RetrieveUpdateDeleteSegment.as_view()),
]
