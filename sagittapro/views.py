from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def main(request):
    context={}
    return render(request,"pages/main.html",context)


def products(request):
    context={}
    return render(request,"pages/products.html",context)

def productDet(request):
    context={}
    return render(request,"pages/productDet.html",context)