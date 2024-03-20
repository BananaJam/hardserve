from django.urls import include, path
from .views import UserRegistrationView, LoginView, PasswordResetRequestView, PasswordResetConfirmView

from django.contrib.auth import views as auth_views


urlpatterns = [
    path('register/', UserRegistrationView.as_view(), name='user-register'),
    path('login/', LoginView.as_view(), name='user-login'),
    path('password-reset/', PasswordResetRequestView.as_view(), name='password_reset'),
    path('password-reset-confirm/<uidb64>/<token>/', PasswordResetConfirmView.as_view(), name='password_reset_confirm'),
    path('social-auth/', include('social_django.urls', namespace='social')),

]