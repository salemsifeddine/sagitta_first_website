from math import prod
from unicodedata import category
from django.shortcuts import render
from django.http import HttpResponse
from .models import *
from .forms import *
from django.shortcuts import redirect
# Create your views here.


def newsletterem(request):
        try:
            print(request.GET["newsletter"])
        except :
            pass
def main(request):
    
    context={"title":"Acceuil"}
    newsletterem(request)
    return render(request,"pages/main.html",context)


def products(request):
    allproducts=[]
    
    for catgry in Category.objects.all():
        myarr=[]
      
        for product in Product.objects.filter(category=catgry):

            obj={
                'product':product.name,
                "image":product.image.url,
                "price":product.price,
                "width":product.width.width,
            }
            myarr.append(obj)

            myobj={
                "category":catgry.category,
                "productscat":myarr
            }
        allproducts.append(myobj)
    
    

    context={"title":"Produits","products":Product.objects.all(),"categories":Category.objects.all(),
    "productsfil":allproducts}
    return render(request,"pages/products.html",context)


def page(request):
    context={"title":"test"}
    return render(request,"pages/page.html",context)

def contact(request):

    if request.method != "POST":
        form=ContactUsForm()
        
    else:
        
        form=ContactUsForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect("main")
            
    context={"title":"contact","form":form}
    return render(request,"pages/contact.html",context)

 


def faq(request):
    context={
        "title":"F&Q"
    }
    return render(request,"pages/faq.html",context)


def about(request):
    context={"title":"A Propos"}
    return render(request,"pages/about.html",context)


from django.http import JsonResponse
import json

def HotdealsApi(request):
    data= json.loads(request.body.decode('utf-8'))
    emailnsltrjs=data['newsletter']
    
    emailNsltr, created = NewsletterEmails.objects.get_or_create(email=emailnsltrjs)
    
  
    
    return JsonResponse("empty", safe=False)

def showpro(request):
    return render(request,"pages/html.html")
