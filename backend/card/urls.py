from django.urls import path

from card.views import ListCards

urlpatterns = [
    path("", ListCards.as_view()),
]
