from django.shortcuts import render
from djangorestframework_camel_case.parser import CamelCaseJSONParser
from djangorestframework_camel_case.render import CamelCaseJSONRenderer
from rest_framework import views
from rest_framework.response import Response

from news.models import News
from news.serializers import NewsSerializer


class ListNewsDetailView(views.APIView):
    serializer_class = NewsSerializer
    parser_classes = [CamelCaseJSONParser]
    renderer_classes = [CamelCaseJSONRenderer]

    def get(self, request, *args, **kwargs):
        news = News.objects.get(pk=self.kwargs.get('id'))
        result = self.serializer_class(news).data
        return Response(result)


class ListNewsView(views.APIView):
    serializer_class = NewsSerializer
    parser_classes = [CamelCaseJSONParser]
    renderer_classes = [CamelCaseJSONRenderer]

    def get(self, request):
        news = News.objects.all()
        result = self.serializer_class(news, many=True).data
        return Response(result)
