from django.shortcuts import render
from rest_framework.generics import ListAPIView
from .models import Product, Nutriens, Product_Nutriens
from products.serializers import ProductSerializer, NutriensSerializer, ProductNutriensSerializer
from django.http import FileResponse,  JsonResponse

class ProductListView(ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    def list(self, request, *args, **kwargs):
        response = super(ProductListView, self).list(request, *args, **kwargs)
        response.data = {
            'message': 'Список продуктів успішно отримано.',
            'products': response.data,
        }
        return response
    
# class NutriensListView(ListAPIView):
#     queryset = Nutriens.objects.all()
#     serializer_class = NutriensSerializer

#     def list(self, request, *args, **kwargs):
#         response = super(NutriensListView, self).list(request, *args, **kwargs)
#         response.data = {
#             'message': 'Список поживних речовин успішно отримано.',
#             'nutriens': response.data,
#         }
#         return response
    
class ProductNutriensListView(ListAPIView):
    queryset = Product_Nutriens.objects.all()
    serializer_class = ProductNutriensSerializer

    def get_queryset(self):
        product_id = self.kwargs['product_id']
        return Product_Nutriens.objects.filter(product_id=product_id)

    def list(self, request, *args, **kwargs):
        response = super(ProductNutriensListView, self).list(request, *args, **kwargs)
        response.data = {
            'message': 'Детальну інформацію про продукт успішно отримано.',
            'product_nutriens': response.data,
        }
        return response

def GetImageByName(request, image_name):
    image_path = f"./products/images/{image_name}"
    try:
        image_file = open(image_path, 'rb')
    except FileNotFoundError:
        return JsonResponse({'error': 'Image not found'}, status=404)

    return FileResponse(image_file)
