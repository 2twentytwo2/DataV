from django.db import models

# Create your models here.
# 1、设计模型结构（数据库字段）
class Article(models.Model):
    # 1、设计模型结构；
    # 2、定义模型层字段类型
    articel_id = models.AutoField(primary_key = True)
    title = models.TextField()
    abstract = models.TextField()
    content = models.DateTimeField(auto_now = True)
    
