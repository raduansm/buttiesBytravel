

from requests import Response
from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import User
from .serializers import UserSerializer


@api_view(['GET'])
def apioverview(request):
    api_urls = {
        'List': '/user-list/',
        'Create': '/user-create/',
        'Update': '/user-update/<str:pk>/',
        'Delete': '/user-delete/<str:pk>/',
        'Join Tour': '/join-tour/<str:pk>/',
        'Create Tour': '/create-tour/',
        'Send Request': '/send-request/<str:pk>/',
        'Rate Buddy': '/rate-buddy/<str:pk>/',
        'Write Tour Vlog': '/write-tour-vlog/',
        'User Profile': '/user-profile/',
    }
    return Response(api_urls)

@api_view(['GET'])
def user_list(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def tour_create(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)

@api_view(['POST'])
def tour_request_create(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)



