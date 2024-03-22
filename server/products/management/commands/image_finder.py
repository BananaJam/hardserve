import requests
import json
import os


def find_image(product_name, self):
    # API_KEY = '949a824f1f6794d902c4ec8f55289777'
    # APP_ID = 'e6fc3dc3'

    API_KEY = '5dc00c2ba116ab53ce2df7c6739b1dc2'
    APP_ID = '64a035b4'
    url = "https://trackapi.nutritionix.com/v2/natural/nutrients"
    headers = {
        "x-app-id": APP_ID, 
        "x-app-key": API_KEY,  
        "Content-Type": "application/json"
    }
    data = {
        "query": product_name
    }

    try:
        response = requests.post(url, headers=headers, json=data)
        response.raise_for_status()
        product_info = response.json()

        if product_info and 'foods' in product_info:

            image_url = product_info['foods'][0]['photo']['highres']
            print("URL зображення продукту:", image_url)

            image_response = requests.get(image_url)
            image_response.raise_for_status()

            image_dir = "./products/images/"
            if not os.path.exists(image_dir):
                os.makedirs(image_dir)

            with open(f"{image_dir}{product_name}.jpg", "wb") as f:
                f.write(image_response.content)
            self.stdout.write(self.style.SUCCESS('Successfully image downloaded'))
            return f"./products/images/{product_name}.jpg"
        else:
            print("Зображення не знайдено.")
            return None
    except requests.exceptions.RequestException as e:
        self.stdout.write(self.style.ERROR(f"Error: {e}"))
        return None