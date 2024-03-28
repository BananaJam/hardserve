from rest_framework import serializers
from .models import *

class ProductSerializer(serializers.ModelSerializer):
    proteins = serializers.FloatField(read_only=True)
    carbs = serializers.FloatField(read_only=True)
    fats = serializers.FloatField(read_only=True)
    calories = serializers.FloatField(read_only=True)

    class Meta:
        model = Product
        fields = ['name', 'image', 'category', 'short_description', 'proteins', 'fats', 'carbs', 'calories','glycemic_index']

class NutriensSerializer(serializers.ModelSerializer):
    class Meta:
        model = Nutriens
        fields = ['name', 'unit']

class ProductNutriensSerializer(serializers.ModelSerializer):
    product = ProductSerializer(read_only=True)
    nutrient = NutriensSerializer(read_only=True)

    class Meta:
        model = Product_Nutriens
        fields = ['product', 'nutrient', 'amount']