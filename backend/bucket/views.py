from djangorestframework_camel_case.parser import CamelCaseJSONParser
from djangorestframework_camel_case.render import CamelCaseJSONRenderer
from rest_framework.response import Response
from rest_framework.views import APIView

from bucket.models import Category, Tooth
from bucket.serializer import CategorySerializer, ToothSerializer


class ListCategories(APIView):
    serializer_class = CategorySerializer
    parser_classes = [CamelCaseJSONParser]
    renderer_classes = [CamelCaseJSONRenderer]

    def get(self, request):
        categories = Category.objects.all()
        result = self.serializer_class(categories, many=True).data
        return Response(result)


class CategoryItemList(APIView):
    serializer_class = ToothSerializer
    parser_classes = [CamelCaseJSONParser]
    renderer_classes = [CamelCaseJSONRenderer]

    def get(self, request):
        teeth_with_category_id = Tooth.objects.filter(category__id=request.GET.get('categoryId'))
        result = self.serializer_class(teeth_with_category_id, many=True).data
        return Response(result)
