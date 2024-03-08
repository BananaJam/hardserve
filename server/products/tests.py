from django.test import TestCase
from products.models import Product
from rest_framework.test import APITestCase
from rest_framework import status
from django.urls import reverse

class ProductModelTest(TestCase):
    @classmethod
    def setUpTestData(cls):
        Product.objects.create(name="testproduct", category="testcategory", proteins=10.0, fats=10.0, carbohydrates=10.0, glycemic_index=50)
 
    def test_product_content(self):
        product = Product.objects.get(id=1)
        expected_object_name = f'{product.name}'
        self.assertEqual(expected_object_name, 'testproduct')
        self.assertEqual(product.category, 'testcategory')
        self.assertEqual(product.proteins, 10.0)
        self.assertEqual(product.fats, 10.0)
        self.assertEqual(product.carbohydrates, 10.0)
        self.assertEqual(product.glycemic_index, 50)



class ProductListViewTest(APITestCase):
    @classmethod
    def setUpTestData(cls):
        number_of_products = 5
        for product_id in range(number_of_products):
            Product.objects.create(
                name=f'Product {product_id}',
                category='Test Category',
                proteins=10.0,
                fats=10.0,
                carbohydrates=10.0,
                glycemic_index=50
            )

    def test_view_url_exists_at_desired_location(self):
        resp = self.client.get('/products/')
        self.assertEqual(resp.status_code, status.HTTP_200_OK)

    def test_view_url_accessible_by_name(self):
        resp = self.client.get(reverse('product-list'))
        self.assertEqual(resp.status_code, status.HTTP_200_OK)

    def test_view_uses_correct_serializer(self):
        resp = self.client.get(reverse('product-list'))
        self.assertEqual(resp.status_code, status.HTTP_200_OK)
        self.assertTrue('name' in resp.data[0])
        self.assertTrue('category' in resp.data[0])
        self.assertTrue('proteins' in resp.data[0])
        self.assertTrue('fats' in resp.data[0])
        self.assertTrue('carbohydrates' in resp.data[0])
        self.assertTrue('glycemic_index' in resp.data[0])


