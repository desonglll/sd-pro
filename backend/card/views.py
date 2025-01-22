from django.shortcuts import render
from djangorestframework_camel_case.parser import CamelCaseJSONParser
from djangorestframework_camel_case.render import CamelCaseJSONRenderer, CamelCaseBrowsableAPIRenderer
from rest_framework.response import Response
from rest_framework.views import APIView

from card.models import Card
from card.serializers import CardSerializer


class ListCards(APIView):
    serializer_class = CardSerializer
    parser_classes = [CamelCaseJSONParser]
    renderer_classes = [CamelCaseJSONRenderer]

    def get(self, request):
        cards = Card.objects.all()
        result = self.serializer_class(cards, many=True).data
        return Response(result)
