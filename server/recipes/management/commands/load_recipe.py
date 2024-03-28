import requests
from django.core.management.base import BaseCommand
from recipes.models import *

class Command(BaseCommand):
    help = 'Load initial recipe into the database from Spoonacular API'

    def handle(self, *args, **kwargs):

        recipe_term = []

        recipe = 'pasta'

        # api_key = '339a5df078aa48f2aa831ec1413f7537'
        # api_key = '60c5617260b84b1fb7ba939f0cdad2a6'
        # api_key = 'dbb41dcdd4ef4c6dacfd8e6c9b1db54c'
        # api_key = 'e258317c18264d14ba91f8f215d80f62'
        # api_key = '87f459c41b2542809173f185926cec62'
        api_key = '42d94788e6dd4b2c81ee247449c38820'

        url = 'https://api.spoonacular.com/recipes/complexSearch' 
        params = {'apiKey': api_key, f'query': {recipe}}
        response = requests.get(url, params=params)
        response.raise_for_status()
        
        data = response.json()

        recipe_id = data['results'][0]['id']

        recipe_name = data['results'][0]['title']

        url = f'https://api.spoonacular.com/recipes/{recipe_id}/information'
        params = {'apiKey': api_key, 'amount': '100', 'unit': 'g'}
        response = requests.get(url, params=params)
        response.raise_for_status()

        recipe_data = response.json()

        Recipe.objects.create(
            name=recipe_name,  
            image=recipe_data['image'],
            short_description=recipe_data['summary'],
        )
        self.stdout.write(self.style.SUCCESS('Successfully loaded recipe into the database'))