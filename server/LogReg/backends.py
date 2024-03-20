from django.contrib.auth.backends import ModelBackend
from django.contrib.auth import get_user_model
from django.db.models import Q

class EmailOrUsernameModelBackend(ModelBackend):
    def authenticate(self, request, username=None, password=None, **kwargs):
        UserModel = get_user_model()
        users = UserModel.objects.filter(Q(username__iexact=username) | Q(email__iexact=username))
        for user in users:
            if user.check_password(password):
                return user
        return None


