import requests
from django.core.management.base import BaseCommand
from products.models import Product

class Command(BaseCommand):
    help = 'Load initial products into the database from Spoonacular API'

    def handle(self, *args, **kwargs):
        url = 'https://api.spoonacular.com/food/ingredients/search' 
        params = {'apiKey': '339a5df078aa48f2aa831ec1413f7537', 'query': 'tomato', 'number': '2'}
        response = requests.get(url, params=params)
        response.raise_for_status()

        data = response.json()
        product_id = data['results'][0]['id']

        url = f'https://api.spoonacular.com/food/ingredients/{product_id}/information'
        params = {'apiKey': '339a5df078aa48f2aa831ec1413f7537', 'amount': '100', 'unit': 'g'}
        response = requests.get(url, params=params)
        response.raise_for_status()

        product_data = response.json()

        # def delete_object(id):
        #     try:
        #         obj = Product.objects.get(id=id)
        #         obj.delete()
        #     except Product.DoesNotExist:
        #         print("Object with id {} does not exist".format(id))

        # delete_object(16)

        if Product.objects.filter(name=product_data['name']).exists():
            self.stdout.write(self.style.WARNING('Products already loaded into the database'))
            return
        
        if len(product_data['categoryPath']) == 2:
            n = 1
            category = product_data['categoryPath'][n]
        elif len(product_data['categoryPath']) == 1:
            n = 0
            category = product_data['categoryPath'][n]
        else: 
            category = '——'  

        def find_nutrient(nutrients, name):
            for nutrient in nutrients:
                if nutrient['name'] == name:
                    return nutrient['amount']
            return None

        proteins = find_nutrient(product_data['nutrition']['nutrients'], 'Protein')
        fats = find_nutrient(product_data['nutrition']['nutrients'], 'Fat')
        carbs = find_nutrient(product_data['nutrition']['nutrients'], 'Carbohydrates')
        cal = find_nutrient(product_data['nutrition']['nutrients'], 'Calories')

        product = {
            'name': product_data['name'],  
            'category': category,  
            'proteins': proteins,  
            'fats': fats,  
            'carbohydrates': carbs,
            'calories': cal,
            'glycemic_index': product_data['nutrition']['properties'][0]['amount'],  
        }
        Product.objects.create(**product)


        self.stdout.write(self.style.SUCCESS('Successfully loaded products into the database'))