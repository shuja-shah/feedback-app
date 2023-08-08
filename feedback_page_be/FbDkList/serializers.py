from rest_framework import serializers
from .models import FdBkConfig, TOrdHead, FdBkQuestions, FdBk


class FdBkQuestionsSerializer(serializers.ModelSerializer):
    class Meta:
        model = FdBkQuestions
        fields = "__all__"


class FeedbackSerializer(serializers.ModelSerializer):
    class Meta:
        model = FdBk
        fields = "__all__"


class OrderSerializer(serializers.ModelSerializer):
    questions = FdBkQuestionsSerializer(many=True, read_only=True)
    feedbacks = FeedbackSerializer(many=True, read_only=True)

    class Meta:
        model = TOrdHead
        fields = "__all__"


class FdBkConfigSerializer(serializers.ModelSerializer):
    orders = OrderSerializer(many=True, read_only=True)

    class Meta:
        model = FdBkConfig
        fields = "__all__"


class OrderUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = TOrdHead
        fields = ["order_avg_rating", "feedback_completed", "Avg_Rating"]
