from django.contrib import admin
from .models import FdBkConfig, Order, FdBkQuestions, Feedback

# Register your models here.

admin.site.register(FdBkConfig)
admin.site.register(Order)
admin.site.register(FdBkQuestions)
admin.site.register(Feedback)
