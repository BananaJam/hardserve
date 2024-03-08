from rest_framework import serializers
from django.contrib.auth import get_user_model

from django.contrib.auth import authenticate

User = get_user_model()

class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField(write_only=True)
    
    def validate(self, data):
        user = authenticate(**data)
        if not user:
            raise serializers.ValidationError("Incorrect Credentials")
        
        return {'user': user}



class UserRegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'email', 'password', 'gender', 'age', 'height', 'weight')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user

