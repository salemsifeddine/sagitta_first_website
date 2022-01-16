from django.db import models
from django.contrib.auth.models import User
from django.db.models.base import Model

# Create your models here.

class Product(models.Model):
    owner=models.ForeignKey(User,on_delete=models.CASCADE,null=True)
    # colors=models.ManyToManyField(Color)
    # sizes=models.ManyToManyField(Size)
    name=models.CharField(max_length=50)
    description=models.TextField()
    old_price=models.FloatField()
    new_price= models.FloatField()
    # catigory=models.ForeignKey(CategoryProduct, on_delete=models.CASCADE, default=1)
    # rate=models.ForeignKey(Rate, on_delete=models.CASCADE, default=0)
    image= models.ImageField( default="", upload_to="products")
    # thumbnail = models.ManyToManyField(ProductThumbnail)
    brand_name=models.CharField(max_length=100)
    sku = models.CharField(max_length=50) 
    meta_keywords = models.CharField(max_length=255, help_text='comma-delimited set of SEO keywords for meta tag')
    meta_description = models.CharField(max_length=255, help_text='content for description meta tag')
    is_active = models.BooleanField(default=True)
    is_bestseller = models.BooleanField(default=False)
    is_featured = models.BooleanField(default=False)
    is_promotion=models.BooleanField(default=False)
    wished=models.BooleanField(default=False)
    date_added=models.DateTimeField(auto_now_add=True)
    #def save(self, *args, **kwargs):
    #    super().save(*args,**kwargs)
    #    img = Image.open(self.image.path)
    #    width=math.floor(img.width/1.5)
    #    height=math.floor(img.height/1.5)
    #    new_size = (height,width)
    #    img = img.resize(new_size, Image.ANTIALIAS)
    #    img.save(self.image.path)

    
    
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

