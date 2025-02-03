from djangorestframework_camel_case.parser import CamelCaseJSONParser
from djangorestframework_camel_case.render import CamelCaseJSONRenderer
from rest_framework.response import Response
from rest_framework.views import APIView

from order.models import Order
from order.serializer import OrderSerializer


class OrderListView(APIView):
    serializer_class = OrderSerializer
    parser_classes = [CamelCaseJSONParser]
    renderer_classes = [CamelCaseJSONRenderer]

    def post(self, request):
        print(request.data)
        serializer = OrderSerializer(data=request.data)
        if serializer.is_valid():
            Order.objects.create(**serializer.validated_data)
            return Response(serializer.validated_data)  # 返回验证后的数据
        else:
            return Response(serializer.errors, status=400)  # 返回错误信息
