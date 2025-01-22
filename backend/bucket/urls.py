from django.urls import path

from bucket.views import ListCategories, CategoryItemList
from card.views import ListCards

urlpatterns = [
    path("category/", ListCategories.as_view()),
    path("teeth_with_category_id/", CategoryItemList.as_view()),
]
