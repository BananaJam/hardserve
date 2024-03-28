from django.shortcuts import render
from rest_framework.generics import ListAPIView
from .models import *
from recipes.serializers import *
from django.http import FileResponse,  JsonResponse

class RecipeListView(ListAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer

    def list(self, request, *args, **kwargs):
        response = super(RecipeListView, self).list(request, *args, **kwargs)
        response.data = {
            'message': 'Список рецептів успішно отримано.',
            'recipes': response.data,
        }
        return response