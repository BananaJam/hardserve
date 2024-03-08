from django.db import models
from django.contrib.auth.models import AbstractUser
from django.conf import settings
from django.utils import timezone
import datetime

class User(AbstractUser):
    GENDER_CHOICES = [
        ('Male', 'male'),
        ('Female', 'female'),
    ]
    username = models.CharField(max_length=255, unique=True)
    email = models.EmailField(max_length=255, unique=True)
    password = models.CharField(max_length=255)
    gender = models.CharField(max_length=6, choices=GENDER_CHOICES)
    age = models.IntegerField(default=20)
    height = models.DecimalField(max_digits=5, decimal_places=2, default=175)
    weight = models.DecimalField(max_digits=5, decimal_places=2, default=70)
    is_email_verified = models.BooleanField(default=False)

