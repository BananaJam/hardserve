from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=255)
    category = models.CharField(max_length=255, null=True)
    short_description = models.TextField(blank=True, null=True)
    image = models.ImageField(upload_to='products/image/', null=True, blank=True)

    @property
    def glycemic_index(self):
        glycemic_index = self.product_nutrients.filter(nutrient__name='Glycemic Index').first()
        return glycemic_index.amount if glycemic_index else 0

    @property
    def proteins(self):
        protein = self.product_nutrients.filter(nutrient__name='Protein').first()
        return protein.amount if protein else None

    @property
    def carbs(self):
        carb = self.product_nutrients.filter(nutrient__name='Carbohydrates').first()
        return carb.amount if carb else None

    @property
    def fats(self):
        fat = self.product_nutrients.filter(nutrient__name='Fat').first()
        return fat.amount if fat else None
    
    @property
    def calories(self):
        calories = self.product_nutrients.filter(nutrient__name='Calories').first()
        return calories.amount if calories else None

    def __str__(self):
        return self.name
    
class Nutriens(models.Model):
    name = models.CharField(max_length=255)
    unit = models.CharField(max_length=255)

    def __str__(self):
        return self.name
    

class Product_Nutriens(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='product_nutrients')
    nutrient = models.ForeignKey(Nutriens, on_delete=models.CASCADE, related_name='product_nutrients')
    amount = models.DecimalField(max_digits=10, decimal_places=5)

    def __str__(self):
        return self.product.name + ' ' + self.nutrient.name