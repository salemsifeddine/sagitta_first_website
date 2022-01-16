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
    context={"title":"Produits"}
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


# from django.views import generic
# class ProductDetailView(generic.DetailView):
    
    
#     model=Product
#     template_name="pages/test.html"
    # def get_context_data(self,**kwargs):

      
    #     total = super().get_context_data(**kwargs)
    #     products = super().get_context_data(**kwargs)
        
    #     total["relatedProducts"]= Product.objects.all().filter(catigory=self.object.catigory.pk)[:6]
    #     total["products"]=Product.objects.all()
    #     total["colors"]=Color.objects.all()
    #     total["sizes"]=Size.objects.all()
    #     total["totalitem"]=callcartnumber(self.request)['total']
    #     try:
    #         total["wishlist"]=callwishnumber(self.request)
    #     except:
    #         total["wishlist"]=[]
        
    #     if self.request.user.is_authenticated:
    #         total["wishlists"]=Wishlist.objects.all().filter(customer=self.request.user)
    #         total['wishedproduct']=Wishlist.objects.all().filter(customer=self.request.user, product=self.object.pk)

    #         print(total['wishedproduct'])
            
    #     total['related']=Product.objects.all().filter(catigory=self.object.pk)

    #     try:
    #         total['wishedproduct']=total['wishedproduct'].first().product
    #     except:
    #         total['wishedproduct']=''

       
    #     return total



def faq(request):
    context={
        # "faqs":FaQ.objects.all(),
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
