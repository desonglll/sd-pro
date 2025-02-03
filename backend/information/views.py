from djangorestframework_camel_case.parser import CamelCaseJSONParser
from djangorestframework_camel_case.render import CamelCaseJSONRenderer
from rest_framework import views
from rest_framework.response import Response

from information.models import Information, AboutUs
from information.serializers import InformationSerializer, AboutUsSerializer


class ListInfoView(views.APIView):
    serializer_class = InformationSerializer
    parser_classes = [CamelCaseJSONParser]
    renderer_classes = [CamelCaseJSONRenderer]

    def get(self, request):
        infos = Information.objects.all()
        result = self.serializer_class(infos, many=True).data
        return Response(result)


class AboutUsView(views.APIView):
    serializer_class = AboutUsSerializer
    parser_classes = [CamelCaseJSONParser]
    renderer_classes = [CamelCaseJSONRenderer]

    def get(self, request):
        about = AboutUs.objects.all()
        result = self.serializer_class(about, many=True).data
        return Response(result)
