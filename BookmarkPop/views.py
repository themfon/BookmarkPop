#from django.shortcuts import render
from django.http import HttpResponse

def home(request):
    return HttpResponse("Hey 😄 What do you do with all those Twitter Bookmarks though?")