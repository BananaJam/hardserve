import requests
def find_image(product):
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
            print("Посилання на зображення помідору:", image_url)
        else:
            print("Зображення не знайдено.")
    else:
        print("Помилка при виконанні запиту:", response.status_code)

    response = requests.get(image_url)

    if response.status_code == 200:
        with open(f"./products/image/{product}.jpg", "wb") as f:
            f.write(response.content)
        print("Image downloaded successfully.")
    
    return f"./products/image/{product}.jpg"
