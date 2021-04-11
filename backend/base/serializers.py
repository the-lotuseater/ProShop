from .models import Product
from rest_framework import serializers
from django.contrib.auth.models import User

'''
Product Serializer used by the view class to serialize data from the database and return it to the client.
Model attribute of the class meta tells the serializer that we want to serialize the product model.
Fields attribute of the meta class is used to specify which fields from the model do we want to be serialized.
'''
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__' 