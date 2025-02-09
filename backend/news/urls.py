from django.urls import path

from news.views import ListNewsView, ListNewsDetailView

urlpatterns = [
    path("", ListNewsView.as_view()),
    path("<int:id>/", ListNewsDetailView.as_view()),
]
