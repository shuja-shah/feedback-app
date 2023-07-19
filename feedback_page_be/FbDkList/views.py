from rest_framework import viewsets
from .models import FdBkConfig
from .serializers import FdBkConfigSerializer


class FdBkConfigViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = FdBkConfig.objects.all()
    serializer_class = FdBkConfigSerializer
