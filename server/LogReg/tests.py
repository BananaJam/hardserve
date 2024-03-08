from django.test import TestCase
from django.urls import reverse
from django.core import mail
from rest_framework.test import APITestCase
from rest_framework import status
from django.contrib.auth import get_user_model
from django.contrib.auth.models import User

from django.utils.http import urlsafe_base64_encode
from django.utils.encoding import force_bytes
from django.contrib.auth.tokens import default_token_generator


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

    def test_login_failure_wrong_password(self):
        wrong_password_data = {
            'username': 'testuser1',
            'password': 'wrongpassword'
        }
        response = self.client.post(self.login_url, wrong_password_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertNotIn('access', response.data)

class EmailVerificationTestCase(APITestCase):
    def setUp(self):
        self.user = User.objects.create_user(
            username='tester123', 
            email='tester123@example.com', 
            password='tester123123123', 
            is_email_verified=False 
        )
        self.user.set_password('tester123123123')
        self.user.save()

    def test_email_verification_process(self):
        token = default_token_generator.make_token(self.user)
        uid = urlsafe_base64_encode(force_bytes(self.user.pk))
        verify_url = reverse('verify-email', kwargs={'uidb64': uid, 'token': token})
        self.assertFalse(User.objects.get(email='tester123@example.com').is_email_verified)
        response = self.client.get(verify_url, format='json')
        self.assertTrue(User.objects.get(email='tester123@example.com').is_email_verified)