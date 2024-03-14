from rest_framework import serializers
from .models import Product, Nutriens, Product_Nutriens

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['name', 'image', 'category', 'short_description', 'glycemic_index']

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