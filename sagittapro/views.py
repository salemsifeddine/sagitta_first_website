from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def main(request):
    context={}
    return render(request,"pages/main.html",context)