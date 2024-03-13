from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=255)
    category = models.CharField(max_length=255, null=True)
    short_description = models.TextField(blank=True, null=True)
    proteins = models.DecimalField(max_digits=5, decimal_places=2)
    fats = models.DecimalField(max_digits=5, decimal_places=2)
    carbohydrates = models.DecimalField(max_digits=5, decimal_places=2)
    calories = models.DecimalField(max_digits=5, decimal_places=2)
    glycemic_index = models.IntegerField()
    image = models.ImageField(upload_to='products/', null=True, blank=True)
    # Додайте інші поля 

    def __str__(self):
        return self.name