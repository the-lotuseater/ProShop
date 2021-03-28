from django.urls import path;
from . import views;

'''
File to mention all url paths for application. 
This is a URL routing system.
'''
urlpatterns = [
    path('',views.getRoutes, name='routes'),
    path('products/', views.getProducts, name='products'),
    path('products/<str:id>', views.getProduct, name='product')
]