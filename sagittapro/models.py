 
from django.db import models 


# Create your models here.

class Width(models.Model):
    width = models.CharField(max_length=5)
    def __str__(self):
        return f"{self.width}"

 
    
    
class Category(models.Model):
    category=models.CharField(max_length=50)
    def __str__(self):
        return self.category 

class Product(models.Model):
    name=models.CharField(max_length=50)
    price= models.FloatField()
    image= models.ImageField( default="", upload_to="products")
    category=models.ForeignKey(Category,on_delete=models.CASCADE)
    width=models.ForeignKey(Width,on_delete=models.CASCADE)
    date_added=models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.name

class NewsletterEmails(models.Model):
    email = models.EmailField(blank=True, null=True)
    def __str__(self):
        return f"{self.email}"

class FaQ(models.Model):
    question = models.CharField(max_length=255)
    answer=models.CharField(max_length=255)

class ContactUs(models.Model):
    first_name=models.CharField(max_length=60)
    last_name=models.CharField(max_length=60)
    email=models.EmailField(max_length=255)
    subject=models.TextField()

    def __str__(self):
        return f"{self.first_name} contact"

