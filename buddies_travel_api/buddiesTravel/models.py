from django.db import models

class User(models.Model):
    username = models.CharField(max_length=100)
    email = models.EmailField()
    password = models.CharField(max_length=100)
    user_nid = models.CharField(max_length=100)
    image = models.ImageField(upload_to='user_images')

    def __str__(self):
        return self.username

from django.db import models

class Tour(models.Model):
    
    creator = models.ForeignKey(User, on_delete=models.CASCADE, related_name='tours_created')
    title = models.CharField(max_length=200)
    description = models.TextField()
    TOUR_TYPES = [
        ('SOLO', 'Solo'),
        ('GROUP', 'Group'),
    ]
    tour_type = models.CharField(max_length=5, choices=TOUR_TYPES, default='GROUP')
    start_date = models.DateField()
    end_date = models.DateField()
    destination = models.CharField(max_length=200)
    max_participants = models.PositiveIntegerField()
    current_participants_count = models.PositiveIntegerField(default=0)
    STATUS_CHOICES = [
        ('OPEN', 'Open'),
        ('FULL', 'Full'),
        ('COMPLETED', 'Completed'),
    ]
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='OPEN')

    def __str__(self):
        return self.title
    

class TourRequest(models.Model):
    tour = models.ForeignKey(Tour, on_delete=models.CASCADE, related_name='tour_requests')
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='tour_requests')
    STATUS_CHOICES = [
        ('PENDING', 'Pending'),
        ('ACCEPTED', 'Accepted'),
        ('REJECTED', 'Rejected'),
    ]
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='PENDING')

    def __str__(self):
        return self.tour.title + ' - ' + self.user.username
    
class TourVlog(models.Model):
    tour = models.ForeignKey(Tour, on_delete=models.CASCADE, related_name='tour_vlogs')
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='tour_vlogs')
    vlog = models.FileField(upload_to='tour_vlogs')
    description = models.TextField()
    rating = models.PositiveIntegerField(default=0)

    def __str__(self):
        return self.tour.title + ' - ' + self.user.username
    
