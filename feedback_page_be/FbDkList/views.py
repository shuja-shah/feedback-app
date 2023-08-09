from rest_framework.generics import ListAPIView, RetrieveAPIView, CreateAPIView, UpdateAPIView
from .models import FdBkConfig, TOrdHead, FdBk
from .serializers import FdBkConfigSerializer, OrderSerializer, FeedbackSerializer,OrderUpdateSerializer
from rest_framework import generics


class FdBkConfigListView(ListAPIView):
    queryset = FdBkConfig.objects.all()
    serializer_class = FdBkConfigSerializer


class OrderDetailView(RetrieveAPIView):
    queryset = TOrdHead.objects.all()
    serializer_class = OrderSerializer
    # lookup_field = 'order_number'


class FeedbackCreateView(generics.CreateAPIView):
    queryset = FdBk.objects.all()
    serializer_class = FeedbackSerializer

    # def perform_create(self, serializer):
    #     # Call the default perform_create method to save the instance
    #     feedback = serializer.save()

    #     # Get the order associated with the feedback
    #     order = feedback.question.order

    #     # Check if all questions have feedback and update the feedback_completed flag
    #     order.feedback_completed = order.all_questions_feedback_completed
    #     order.save()



class OrderUpdateView(UpdateAPIView):
    queryset = TOrdHead.objects.all()
    serializer_class = OrderUpdateSerializer
    lookup_field = 'TOrdHdID'