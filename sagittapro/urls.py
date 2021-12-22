from django.urls import path
from . import views
from django.contrib.auth import views as view

urlpatterns = [
    path('', views.main, name="main"),
    path('produits/', views.products, name="product"),
    path('produitDet/<int:pk>',  views.ProductDetailView.as_view(), name="productDet"),
    path('faq/', views.faq, name="faq"),
    path('product/<int:pk>', views.ProductDetailView.as_view(), name="panier"),
]
