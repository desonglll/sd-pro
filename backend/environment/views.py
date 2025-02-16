from djangorestframework_camel_case.parser import CamelCaseJSONParser
from djangorestframework_camel_case.render import CamelCaseJSONRenderer
from rest_framework import views
from rest_framework.response import Response

from environment.models import Environment
from environment.serializers import EnvironmentSerializer


class ListEnvironmentView(views.APIView):
    serializer_class = EnvironmentSerializer
    parser_classes = [CamelCaseJSONParser]
    renderer_classes = [CamelCaseJSONRenderer]

    def get(self, request):
        env = Environment.objects.all()
        result = self.serializer_class(env, many=True).data
        return Response(result)
