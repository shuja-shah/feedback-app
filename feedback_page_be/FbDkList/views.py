from rest_framework.generics import ListAPIView, RetrieveAPIView, CreateAPIView
from .models import FdBkConfig, Order, Feedback
from .serializers import FdBkConfigSerializer, OrderSerializer, FeedbackSerializer

class FdBkConfigListView(ListAPIView):
    queryset = FdBkConfig.objects.all()
    serializer_class = FdBkConfigSerializer

class OrderDetailView(RetrieveAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    lookup_field = 'Id'

class FeedbackCreateView(CreateAPIView):
    queryset = Feedback.objects.all()
    serializer_class = FeedbackSerializer
