# FdBkConfig/urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import FdBkConfigViewSet

router = DefaultRouter()
router.register(r'businesses', FdBkConfigViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
