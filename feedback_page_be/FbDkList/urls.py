from django.urls import path
from .views import (
    FdBkConfigListView,
    OrderDetailView,
    FeedbackCreateView,
    OrderUpdateView,
)
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path("businesses/", FdBkConfigListView.as_view(), name="business-list"),
    path("orders/<pk>/", OrderDetailView.as_view(), name="order-detail"),
    path("feedback/", FeedbackCreateView.as_view(), name="feedback-create"),
    path("orders/<int:id>/update/", OrderUpdateView.as_view(), name="order-update"),
]


if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
