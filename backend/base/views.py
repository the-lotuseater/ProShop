from django.shortcuts import render
from django.http import JsonResponse
from .products import products
from rest_framework.decorators import api_view 
from rest_framework.response import Response
from .serializers import ProductSerializer
from .models import Product

'''
VIEWs file that contains all API mappings and their methods.
Think of this as your Service file that contains your business logic from Spring Boot.
'''

#API to all request urls for service.
@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/products',
        '/api/products/create',
        '/api/products/upload',
        '/api/products/<id>/reviews',
        '/api/products/top',
        '/api/products/<id>',
        '/api/products/delete/<id>',
        '/api/products/<update>/<id>',

    ]
    return Response(routes)

#API to list all products.
@api_view(['GET'])
def getProducts(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)

#API to retrive and return a product to the controller
@api_view(['GET'])
def getProduct(request, productKey):
    productExists = Product.objects.exists(_id=productKey)
    if(productExists):
        product = Product.objects.get(_id=productKey)
        serializer = ProductSerializer(product, many=False)
        return Response(serializer.data)
    else:
        print("No product with the given key found.")