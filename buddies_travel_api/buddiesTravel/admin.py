from django.contrib import admin

# Register your models here.

from .models import TourRequest, User, Tour

admin.site.register(User)
admin.site.register(Tour)
admin.site.register(TourRequest)
