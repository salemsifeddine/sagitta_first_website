from django.shortcuts import render
from django.http import HttpResponse
from .models import *
# Create your views here.

def main(request):
    context={"title":"Acceuil"}
    return render(request,"pages/main.html",context)


def products(request):
    context={"title":"Produits"}
    return render(request,"pages/products.html",context)


def page(request):
    context={"title":"test"}
    return render(request,"pages/page.html",context)



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