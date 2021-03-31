from django.urls import path;
from . import views

'''
This the custom url routing file which is used by django to route requests for this application. Think of this as your Rest Controller from Spring Boot.
'''
urlpatterns = [
    path('', views.getRoutes, name="routes"),
    path('products/', views.getProducts, name="products"),
    path('products/<productKey>', views.getProduct, name="product"),
]