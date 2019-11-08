from django.urls import path, include 
from . import views

urlpatterns = [
    path("hello_world", views.hello_world),
    path("", views.index, name = "index"),
    path("<int:blog_id>/content", views.content, name = "content"),
    path("<int:blog_id>/modify", views.modify, name = "modify"),
    path("barChart", views.barChart, name = "barChart"),
    path("pieChart", views.pieChart, name = "pieChart"),
]