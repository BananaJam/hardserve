from rest_framework import serializers
from .models import *

class RecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe
        fields = ['name', 'image', 'short_description']

class NutritionsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Nutritions
        fields = ['name', 'unit']

class RecipeNutritionsSerializer(serializers.ModelSerializer):
    recipe = RecipeSerializer(read_only=True)
    nutrient = NutritionsSerializer(read_only=True)

    class Meta:
        model = Recipe_Nutritions
        fields = ['recipe', 'nutrient', 'amount']