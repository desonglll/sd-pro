from django.urls import path

from environment.views import ListEnvironmentView

urlpatterns = [
    path("", ListEnvironmentView.as_view()),
]
