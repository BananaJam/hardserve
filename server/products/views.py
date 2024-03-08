from django.shortcuts import render
from rest_framework.generics import ListAPIView
from .models import Product
from products.serializers import ProductSerializer

class ProductListView(ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    def list(self, request, *args, **kwargs):
        response = super(ProductListView, self).list(request, *args, **kwargs)
        response.data = {
            'message': 'Список продуктів успішно отримано.',
            'products': response.data
        }
        return response
