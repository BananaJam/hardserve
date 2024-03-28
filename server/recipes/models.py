from django.db import models

class Recipe(models.Model):
    name = models.CharField(max_length=255)
    image = models.ImageField(upload_to='recipes/image/', null=True, blank=True)
    short_description = models.TextField(blank=True, null=True)


class Nutritions(models.Model):
    name = models.CharField(max_length=255)
    unit = models.CharField(max_length=255)

    def __str__(self):
        return self.name
    
class Recipe_Nutritions(models.Model):
    recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE, related_name='recipe_nutrients')
    nutrient = models.ForeignKey(Nutritions, on_delete=models.CASCADE, related_name='recipe_nutrients')
    amount = models.DecimalField(max_digits=10, decimal_places=5)

    def __str__(self):
        return self.recipe.name + ' ' + self.nutrient.name