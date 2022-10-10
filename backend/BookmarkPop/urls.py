from django.urls import path
from BookmarkPop import views

urlpatterns = [
    path("", views.home, name="home"),
]