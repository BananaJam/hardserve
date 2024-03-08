from django.shortcuts import render
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
                'message': "Користувач успішно увійшов в систему.",
                "user_id": user.id,
            }, status=status.HTTP_200_OK)
        else:
            return Response({"message": "Неправильні дані."}, status=status.HTTP_400_BAD_REQUEST)


class UserRegistrationView(APIView):
    def post(self, request):
        with transaction.atomic():
            serializer = UserRegistrationSerializer(data=request.data)
            if serializer.is_valid():
                user = serializer.save()
                return Response({"message": "Користувача успішно зареєстровано."}, status=status.HTTP_201_CREATED)
            return Response({"message": "Реєстрація не вдалася."}, status=status.HTTP_400_BAD_REQUEST)



