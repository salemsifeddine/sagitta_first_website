from django.urls import path
from . import views

urlpatterns = [
    path('', views.main, name="main"),
    path('produits/', views.products, name="main"),
    path('produitDet/', views.productDet, name="main"),
]
