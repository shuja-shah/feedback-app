from django.urls import path
from .views import (
    FdBkConfigListView,
    OrderDetailView,
    FeedbackCreateView,
    OrderUpdateView,
    FdBkConfigAndOrderDetailView,
)
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path("businesses/", FdBkConfigListView.as_view(), name="business-list"),
    path("orders/<pk>/", OrderDetailView.as_view(), name="order-detail"),
    path("feedback/", FeedbackCreateView.as_view(), name="feedback-create"),
    path("orders/<int:pk>/update/", OrderUpdateView.as_view(), name="order-update"),
    path(
        "businesses/<int:bu_id>/order/<int:order_id>/",
        FdBkConfigAndOrderDetailView.as_view(),
        name="config-and-order-detail",
    ),
]


if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
