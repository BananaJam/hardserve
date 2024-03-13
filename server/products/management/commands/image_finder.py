import requests
import os

def find_image(product, self):
    headers_image = {
        "Authorization": "PzMibJ300UkcmbCwMEC9Nda7GyFwCn1jzPT0e7HfpWd9Ht8YTGe75RTa"
    }

    params_image = {
        "query": product,
        "per_page": 1
    }

    url = "https://api.pexels.com/v1/search"

    response = requests.get(url, headers=headers_image, params=params_image)

    if response.status_code == 200:
        data = response.json()
        if data['photos']:
            image_url = data['photos'][0]['src']['original']
            print("Посилання на зображення продукту:", image_url)
        else:
            print("Зображення не знайдено.")
    else:
        print("Помилка при виконанні запиту:", response.status_code)

    response = requests.get(image_url)

    if response.status_code == 200:
        image_dir = "./products/images/"
        if not os.path.exists(image_dir):
            os.makedirs(image_dir)
        with open(f"{image_dir}{product}.jpg", "wb") as f:
            f.write(response.content)
        self.stdout.write(self.style.SUCCESS('Successfully image downloaded'))
    
    return f"./products/images/{product}.jpg"
