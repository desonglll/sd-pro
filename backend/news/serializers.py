from rest_framework import serializers

from news.models import News, NewsImage


class NewsImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewsImage
        fields = "__all__"


class NewsSerializer(serializers.ModelSerializer):
    images = NewsImageSerializer(many=True)

    class Meta:
        model = News
        fields = "__all__"
