from django.urls import path
from .import views

urlpatterns = [
    path('',views.apioverview, name='apioverview'),
    path('user-list/',views.user_list, name='user-list'),
    path('tour-create/',views.tour_create, name='tour-create'),


]