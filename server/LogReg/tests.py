from django.test import TestCase
from django.urls import reverse
from django.core import mail
from rest_framework.test import APITestCase
from rest_framework import status
from django.contrib.auth import get_user_model
from django.contrib.auth.models import User

User = get_user_model()

class UserRegistrationTestCase(APITestCase):
    def test_user_registration(self):
        url = reverse('user-register')
        user_data = {
            'username': 'testuser1',
            'email': 'test1@example.com',
            'password': '123123123',
            'gender': 'Male',
            'age': 25,
            'height': 180.0,
            'weight': 75.0
        }

        response = self.client.post(url, user_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertTrue(User.objects.filter(email=user_data['email']).exists())


class UserLoginTestCase(APITestCase):
    def setUp(self):
        self.user = User.objects.create_user(
            username='testuser1', 
            password='123123123', 
            email='test1@example.com', 
            age=25,  
            gender='Male', 
            height=180.0,  
            weight=75.0, 
        )        
        self.login_url = reverse('user-login')

    def test_login_success(self):
        data = {
            'username': 'testuser1',
            'password': '123123123'
        }
        response = self.client.post(self.login_url, data, format='json')
        self.assertIn('access', response.data)
        self.assertIn('refresh', response.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
