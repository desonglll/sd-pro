"""
URL configuration for sd_pro project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from unicodedata import category

from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include

import bucket.urls
import card.urls
import information.urls
import order.urls
import environment.urls
import news.urls
from sd_pro import settings

urlpatterns = ([
                   path('admin/', admin.site.urls),
                   path("card/", include(card.urls)),
                   path("bucket/", include(bucket.urls)),
                   path("info/", include(information.urls)),
                   path("order/", include(order.urls)),
                   path("news/", include(news.urls)),
                   path("environment/", include(environment.urls))
               ]
               + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
               + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT))
