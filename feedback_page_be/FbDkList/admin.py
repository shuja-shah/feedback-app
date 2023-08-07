from django.contrib import admin
from .models import FdBkConfig, TOrdHead, FdBkQuestions, FdBk

# Register your models here.

admin.site.register(FdBkConfig)
admin.site.register(TOrdHead)
admin.site.register(FdBkQuestions)
admin.site.register(FdBk)
