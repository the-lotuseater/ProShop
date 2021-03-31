from .models import Product
from rest_framework import serializers
from django.contrib.auth.models import User

'''
Product Serializer used by the view class to serialize data from the database and return it to the client.
'''
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'