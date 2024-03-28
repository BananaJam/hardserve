from django.urls import path
from recipes.views import *

urlpatterns = [
    path('', RecipeListView.as_view(), name='recipe-list')
]   