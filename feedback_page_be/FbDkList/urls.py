from django.urls import path
from .views import FdBkConfigListView, OrderDetailView, FeedbackCreateView

urlpatterns = [
    path('businesses/', FdBkConfigListView.as_view(), name='business-list'),
    path('orders/<uuid:id>/', OrderDetailView.as_view(), name='order-detail'),
    path('feedback/', FeedbackCreateView.as_view(), name='feedback-create'),
]
