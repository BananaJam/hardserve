from django.urls import path
from products.views import ProductListView, ProductNutriensListView

urlpatterns = [
    path('', ProductListView.as_view(), name='product-list'),
    path('<int:product_id>/', ProductNutriensListView.as_view(), name='product-nutrients-by-product-id'),
]