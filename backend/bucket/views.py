from django.db.models import Q
from djangorestframework_camel_case.parser import CamelCaseJSONParser
from djangorestframework_camel_case.render import CamelCaseJSONRenderer
from rest_framework.response import Response
from rest_framework.views import APIView

from bucket.models import Category, Tooth, Series
from bucket.serializer import CategorySerializer, ToothSerializer, SeriesSerializer


class ListSeries(APIView):
    serializer_class = SeriesSerializer
    parser_classes = [CamelCaseJSONParser]
    renderer_classes = [CamelCaseJSONRenderer]

    def get(self, request):
        series = Series.objects.all()
        result = self.serializer_class(series, many=True).data
        return Response(result)


class ListCategory(APIView):
    serializer_class = CategorySerializer
    parser_classes = [CamelCaseJSONParser]
    renderer_classes = [CamelCaseJSONRenderer]

    def get(self, request):
        categories = Category.objects.all()
        result = self.serializer_class(categories, many=True).data
        return Response(result)


class ListTooth(APIView):
    serializer_class = ToothSerializer
    parser_classes = [CamelCaseJSONParser]
    renderer_classes = [CamelCaseJSONRenderer]

    def get(self, request):
        required_name = request.GET.get('name', '').strip()
        required_title = request.GET.get('title', '').strip()
        required_category_id = request.GET.get('categoryId', '').strip()

        query = Q()
        if required_category_id:
            query &= Q(category__id=required_category_id)
        if required_name:
            query &= Q(name__icontains=required_name)
        if required_title:
            query &= Q(title__icontains=required_title)
        query &= Q(language__icontains="en")  # for english
        # 构造 queryset
        qs = Tooth.objects.filter(query)
        result = self.serializer_class(qs, many=True).data
        return Response(result)
