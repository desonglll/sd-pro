from django.urls import path

from bucket.views import ListCategory, ListTooth, ListSeries

urlpatterns = [
    path("category/", ListCategory.as_view()),
    path("tooth/", ListTooth.as_view()),
    path("series/", ListSeries.as_view()),
]
