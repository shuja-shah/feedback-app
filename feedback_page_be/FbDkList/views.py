from rest_framework.generics import (
    ListAPIView,
    RetrieveAPIView,
    CreateAPIView,
    UpdateAPIView,
)
from .models import FdBkConfig, TOrdHead, FdBk
from .serializers import (
    FdBkConfigSerializer,
    OrderSerializer,
    FeedbackSerializer,
    OrderUpdateSerializer,
)
from rest_framework import generics
from rest_framework.response import Response


class FdBkConfigListView(ListAPIView):
    queryset = FdBkConfig.objects.all()
    serializer_class = FdBkConfigSerializer


class OrderDetailView(RetrieveAPIView):
    queryset = TOrdHead.objects.all()
    serializer_class = OrderSerializer
    # lookup_field = 'order_number'





class FdBkConfigAndOrderDetailView(generics.RetrieveAPIView):
    serializer_class = FdBkConfigSerializer

    def retrieve(self, request, *args, **kwargs):
        try:
            bu_id = self.kwargs["bu_id"]
            order_id = self.kwargs["order_id"]
            fbdk_config = FdBkConfig.objects.get(pk=bu_id)
            order = TOrdHead.objects.get(pk=order_id)
            serializer = self.serializer_class(fbdk_config)
            order_serializer = OrderSerializer(order)
            return Response(
                {
                    "fbdk_config": serializer.data,
                    "order": order_serializer.data,
                }
            )
        except (FdBkConfig.DoesNotExist, TOrdHead.DoesNotExist):
            return Response({"error": "Invalid bu_id or order_id"}, status=404)


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
    lookup_field = "pk"
