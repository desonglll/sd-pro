from django.urls import path

from information.views import ListInfoView

urlpatterns = [
    path("", ListInfoView.as_view())
]
