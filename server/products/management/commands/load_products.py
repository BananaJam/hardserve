import requests
from django.core.management.base import BaseCommand
from products.models import Product, Nutriens, Product_Nutriens
from .image_finder import find_image
import json

class Command(BaseCommand):
    help = 'Load initial products into the database from Spoonacular API'

    def handle(self, *args, **kwargs):

        # заливати по 50-60 продуктів за раз, щоб не перевантажувати сервер 
         
        search_terms = [
            "Bread", "Milk", "Soured cream", "Egg", "Sugar", "Butter", "Salt", "Buckwheat", "Rice", "Potatoes", 
            "Flour", "Carrots", "Onions", "Cabbage", "Beets", "Apples", "Bananas", "Oranges", "Cheese", "Kefir",
            "Coffee", "Tea", "Tomatoes", "Cucumbers", "Eggplant", "Corn", "Olives", "Baking soda",
            "Water", "Syrup","Condensed milk", "Tomato sauce", "Spaghetti", "Sesame seeds", "Ginger",
            "Garlic", "Pork", "Beef", "Chicken", "Salmon", "Tuna", "Soy sauce", "Black pepper",
            "Leeks", "Bell peppers", "Horseradish", "Olive oil", "Orange juice", "Lemons", "Cinnamon",
            "Blackcurrants", "Currants", "Strawberries", "Raspberries", "Pasta", "Ketchup", "Bay leaf",
            # "Chili peppers", "Lard", "Mayonnaise", "Sea salt", "Margarine", "Chicken fillet", "Turkey", "Chicken legs",
            # "Sour cream", "Parsley", "Coriander", "Cumin", "Cardamom", "Cloves", "Grapes", "Grape juice",
            # "Capers", "Sausage", "Ham", "Pumpkin", "Lettuce leaves", "Green onions", "Shrimp", "Mussels",
            # "Crab meat", "Shellfish", "French fries", "Green peas", "Sesame seeds", "Paprika", "Black tea", 
            # "Coconut", "Lavender", "Butter cream", "Sesame oil", "Turmeric", "Carrot",
            # "Watermelon", "Grapefruit", "Cranberries", "Spinach", "Dark chocolate", "Beans", "Cottage cheese"
        ]
        # api_key = '339a5df078aa48f2aa831ec1413f7537'
        # api_key = '60c5617260b84b1fb7ba939f0cdad2a6'
        # api_key = 'dbb41dcdd4ef4c6dacfd8e6c9b1db54c'
        # api_key = 'e258317c18264d14ba91f8f215d80f62'
        # api_key = '87f459c41b2542809173f185926cec62'
        api_key = '42d94788e6dd4b2c81ee247449c38820'

        for product in search_terms:

            product_name = product

            product_image = find_image(product, self)

            url = 'https://api.spoonacular.com/food/ingredients/search' 
            params = {'apiKey': api_key, f'query': {product}, 'number': '1'}
            response = requests.get(url, params=params)
            response.raise_for_status()
            
            data = response.json()

            product_id = data['results'][0]['id']

            url = f'https://api.spoonacular.com/food/ingredients/{product_id}/information'
            params = {'apiKey': api_key, 'amount': '100', 'unit': 'g'}
            response = requests.get(url, params=params)
            response.raise_for_status()

            product_data = response.json()

            product = product_data['name']

            if Product.objects.filter(name=product_data['name']).exists():
                self.stdout.write(self.style.WARNING('Products already loaded into the database'))
                continue


            if len(product_data['categoryPath']) == 2:
                n = 1
                category = product_data['categoryPath'][n]
            elif len(product_data['categoryPath']) == 1:
                n = 0
                category = product_data['categoryPath'][n]
            else: 
                category = '——'  

            product = Product.objects.create(
                name=product_name,  
                category=category,
                image=product_image,
            )

            categories = ['nutrients', 'properties', 'flavonoids']

            for category in categories:
                for item in product_data['nutrition'][category]:
                    nutrient_obj, _ = Nutriens.objects.get_or_create(name=item['name'], unit=item['unit'])
                    Product_Nutriens.objects.create(
                        product=product,
                        nutrient=nutrient_obj,
                        amount=item['amount']
                    )

            self.stdout.write(self.style.SUCCESS('Successfully loaded products into the database'))