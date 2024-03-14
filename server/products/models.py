from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=255)
    category = models.CharField(max_length=255, null=True)
    short_description = models.TextField(blank=True, null=True)
    glycemic_index = models.IntegerField()
    image = models.ImageField(upload_to='products/image/', null=True, blank=True)

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