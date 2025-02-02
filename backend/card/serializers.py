from rest_framework import serializers

from bucket.serializer import CategorySerializer, SeriesSerializer
from card.models import Card, Nav


class NavSerializer(serializers.ModelSerializer):
    series = SeriesSerializer(many=True)

    class Meta:
        model = Nav
        fields = "__all__"


class CardSerializer(serializers.ModelSerializer):
    navs = NavSerializer(many=True)

    class Meta:
        model = Card
        fields = "__all__"
