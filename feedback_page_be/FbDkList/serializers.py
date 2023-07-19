# FdBkConfig/serializers.py
from rest_framework import serializers
from .models import FdBkConfig

class FdBkConfigSerializer(serializers.ModelSerializer):
    class Meta:
        model = FdBkConfig
        fields = '__all__'
