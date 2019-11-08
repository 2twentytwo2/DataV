from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from .models import Article
import csv 
import json 

# Create your views here.
def hello_world(request):
    return HttpResponse("Hello, Django world!")


def index(request):
    csv_file = None
    with open(file="blog/datasets/iris.csv", mode="r") as f:
        csv_file = csv.DictReader(f)
        result = []
        for row in csv_file:
            dd = {}
            for key, value in row.items():
                dd[key] = value
            result.append(dd)
        print("Successful response!")

    return JsonResponse(result, safe=False)


def content(request, blog_id):
    # blog_id 以URLConf 中的配置，从url 中截取出
    article = Article()
    article.title = "title_" + str(blog_id)
    article.abstract = "abstract_" + str(blog_id)
    article.content = "content_" + str(blog_id)
    article.save()
    return HttpResponse("您正在访问第%s详情界面" % blog_id)
    # result = [{"abc": 123}, {"abcd", 1234}]
    # return HttpResponse(result)


def modify(request, blog_id):
    return HttpResponse("您正在访问第%s修改界面" % blog_id)


def barChart(request):
    result = [{"name" : "衬衫", "value": 5}, {"name" : "羊毛衫", "value" : 20}, {"name" : "雪纺衫", "value": 36}, {"name" : "裤子", "value" : 10}, {"name" : "高跟鞋", "value": 10}, {"name" : "袜子", "value": 20}]
    return JsonResponse(result, safe=False)


def pieChart(request):
    result = []
    return JsonResponse(result, safe=False)


