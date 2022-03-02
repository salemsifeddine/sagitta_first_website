from django.contrib.auth.models import User
from django.contrib.auth import forms
from django.db import models
from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import password_validation
from django.db.models.base import Model
from django.forms import ModelForm, fields, widgets
from django.utils.translation import gettext_lazy as _
from django.contrib.auth.validators import UnicodeUsernameValidator
from .models import *
username_validator = UnicodeUsernameValidator()

class ContactUsForm(forms.ModelForm):
      first_name = forms.CharField(max_length=63,widget=forms.TextInput(attrs={'id': 'usernameUser','placeholder': 'Nom',"name":"username"}))
      last_name = forms.CharField(max_length=63,widget=forms.TextInput(attrs={'id': 'usernameUser','placeholder': 'Prénom',"name":"username"}))
      email = forms.CharField(
       widget=forms.EmailInput(attrs={'placeholder': 'E-mail',"name":"email","id":"EmailUser"})
      )
      subject =forms.CharField(widget=forms.Textarea(attrs={"cols":"0","rows":"0","style":"padding: 5px; max-width:521px;max-height: 70px","name":"email","id":"textareainput","placeholder":"Subject"}))
      class Meta:
         model=ContactUs
         fields = ["first_name","last_name","email","subject"]


class NewsLetterEmailForm(forms.ModelForm):
      class Meta:
         model=NewsletterEmails
         fields = "__all__"
