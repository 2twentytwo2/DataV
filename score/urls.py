from django.urls import path, include
from . import views

urlpatterns = [
    path("hello", views.hello, name = "hello"),
    path("college", views.college, name = "colleges"),
    path("major", views.major, name = "major"),
    path("classroom", views.classroom, name = "classroom"),
]