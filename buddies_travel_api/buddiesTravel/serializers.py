from rest_framework import serializers
from .models import TourRequest, User, Tour

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class TourSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tour
        fields = '__all__'

class TourRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = TourRequest
        fields = '__all__'

