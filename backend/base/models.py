from django.db import models
from django.contrib.auth.models import Users;

# Create your models here.
'''
The models.Model argument for this class tells Django that the given class is to be used as a model for Django.
'''
class Product(models.Model):
    user= models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    name= models.CharField(max_length=200, null=True, blank=True)
    #image=
    brand= models.CharField(max_length=200, null=True, blank=True)
    catergory=models.CharField(max_length=200, null=True, blank=True)
    description=models.TextField(null=True, blank=True)
    rating=models.DecimalField(max_digits=7, decimal_places=2)
    numReviews=models.IntegerField(null=True, blank=True, default=0)
    price=models.DecimalField(max_digits=7,decimal_places=2)
    countInStock=models.IntegerField(default=0, null=True, blank=True)
    createdAt=models.DateTimeField(auto_now_add=True)
    _id=models.AutoField(primary_key=True, editable=False)
