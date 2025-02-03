from django.urls import path

from order.views import OrderListView

urlpatterns = [
    path("order/", OrderListView.as_view()),
]
