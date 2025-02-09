from django.urls import path

from news.views import ListNewsView

urlpatterns = [
    path("", ListNewsView.as_view()),
]
