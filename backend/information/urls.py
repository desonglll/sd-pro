from django.urls import path

from information.views import ListInfoView, AboutUsView

urlpatterns = [
    path("", ListInfoView.as_view()),
    path("about/", AboutUsView.as_view())
]
