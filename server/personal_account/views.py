from django.shortcuts import render
from rest_framework import viewsets
from .models import Profile
from .serializers import ProfileSerializer
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.pagination import PageNumberPagination

class ProfileViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    pagination_class = PageNumberPagination

    @action(detail=False, methods=['get'])
    def me(self, request):
        serializer = self.get_serializer(request.user.profile)
        return Response(serializer.data)