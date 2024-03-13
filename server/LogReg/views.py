from django.views import View
from django.shortcuts import redirect, render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import UserRegistrationSerializer
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.tokens import TokenError, AccessToken
from django.contrib.auth import get_user_model
from rest_framework.permissions import AllowAny
from .serializers import LoginSerializer
from django.db import transaction
from django.conf import settings
from django.core.mail import send_mail
from django.utils.encoding import force_bytes, force_str
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.contrib.auth.tokens import default_token_generator
from django.urls import reverse
from django.core.mail import send_mail

User = get_user_model()


class LoginView(APIView):
    permission_classes = (AllowAny,)

    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.validated_data['user']
            
            refresh = RefreshToken.for_user(user)
            
            return Response({
                'refresh': str(refresh),
                'access': str(refresh.access_token),
                'message': "Користувач успішно ввійшов.",
                "user_id": user.id,
            }, status=status.HTTP_200_OK)
        else:
            return Response({"message": "Недійсні дані.", "errors": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)


class UserRegistrationView(APIView):
    def post(self, request):
        with transaction.atomic():
            serializer = UserRegistrationSerializer(data=request.data)
            if serializer.is_valid():
                user = serializer.save()

                # Send confirmation email
                send_mail(
                    'Підтвердіть вашу електронну пошту',
                    'Натисніть на посилання нижче, щоб підтвердити вашу електронну пошту:\nhttp://your-website.com/confirm/' + str(user.confirmation_token),
                    'your-email@gmail.com',
                    [user.email],
                    fail_silently=False,
                )

                return Response({"message": "Користувач успішно зареєстрований. Будь ласка, підтвердіть вашу електронну пошту."}, status=status.HTTP_201_CREATED)
