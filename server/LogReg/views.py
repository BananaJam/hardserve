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
                send_verification_email(user, request)
                return Response({"message": "Користувача успішно зареєстровано."}, status=status.HTTP_201_CREATED)
            return Response({"message": "Реєстрація не вдалася.", "errors": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)


def send_verification_email(user, request):
    token = default_token_generator.make_token(user)
    user_id = urlsafe_base64_encode(force_bytes(user.pk))
    verification_url = request.build_absolute_uri(f'/verify-email/{user_id}/{token}/')
    send_mail(
        'Перевірте свою адресу електронної пошти',
        f'Підтвердьте свою електронну пошту, натиснувши це посилання: {verification_url}',
        settings.DEFAULT_FROM_EMAIL,
        [user.email],
        fail_silently=False,
    )

class VerifyEmailView(View):
    def get(self, request, uidb64, token, *args, **kwargs):
        try:
            uid = force_str(urlsafe_base64_decode(uidb64))
            user = User.objects.get(pk=uid)
        except (TypeError, ValueError, OverflowError, User.DoesNotExist):
            user = None

        if user is not None and default_token_generator.check_token(user, token):
            user.is_email_verified = True
            user.save()
            return render(request, 'test.html')
        else:
            return render(request, 'test.html', {'error': 'Посилання для підтвердження недійсне або термін дії минув.'})
