from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
import pandas as pd 
import csv, json
import os 
import score.static.utils as utils 

# Create your views here.

def hello(request):
    return HttpResponse("<h1>Hello, World!</h1>")


def college(request):
    return JsonResponse(utils.cacul_score("score/static/datasets/college/datasets/describe/"))
    

def major(request):
    return JsonResponse(utils.cacul_score("score/static/datasets/major/datasets/describe/"))


def classroom(request):
    return JsonResponse(utils.cacul_score("score/static/datasets/classroom/datasets/describe/"))


if __name__ == "__main__":
    college(None)

