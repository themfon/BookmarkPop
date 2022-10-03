from django.shortcuts import render
from django.http import HttpResponse
#Create views here

def home(request):
    return HttpResponse("👋🏽")