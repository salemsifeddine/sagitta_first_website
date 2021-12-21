from django.urls import path
from . import views

urlpatterns = [
    path('', views.main, name="main"),
    path('produits/', views.products, name="product"),
    path('produitDet/', views.productDet, name="productDet"),
    path('faq/', views.faq, name="faq"),
]
