from rest_framework import serializers
from .models import Product

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['name', 'image','category', 'short_description', 'proteins', 'fats', 'carbohydrates', 'glycemic_index'  ]
