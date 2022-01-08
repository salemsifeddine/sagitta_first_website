from django.urls import path
from . import views
from django.contrib.auth import views as view

urlpatterns = [
    path('', views.main, name="main"),
    path('produits/', views.products, name="product"),
    path('faq/', views.faq, name="faq"),
    path('about/', views.about, name="about"),
    path('page/', views.page, name="page"),
]
