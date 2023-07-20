from rest_framework import serializers
from .models import FdBkConfig, Order, FdBkQuestions, Feedback


class FdBkQuestionsSerializer(serializers.ModelSerializer):
    class Meta:
        model = FdBkQuestions
        fields = '__all__'

class OrderSerializer(serializers.ModelSerializer):
    questions = FdBkQuestionsSerializer(many=True, read_only=True)

    class Meta:
        model = Order
        fields = '__all__'

class FdBkConfigSerializer(serializers.ModelSerializer):
    orders = OrderSerializer(many=True, read_only=True)

    class Meta:
        model = FdBkConfig
        fields = '__all__'

class FeedbackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feedback
        fields = '__all__'