from django.shortcuts import render
from django.http import JsonResponse
from .products import products 
from rest_framework.decorators import api_view
from rest_framework.response import Response

# Create your views here.

@api_view(['GET'])
def getRoutes(request):
    route = [
        'api/products',
        'api/products/<id>/',
        'api/products/<id>/reviews',
        'api/products/upload'
    ]
    return Response('Hello',safe=False)
    
def getProducts(request):
    return JsonResponse('products', safe=False)