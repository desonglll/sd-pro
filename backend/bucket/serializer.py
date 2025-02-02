from rest_framework import serializers

from bucket.models import Tooth, Category, Series


class SeriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Series
        fields = "__all__"


class CategorySerializer(serializers.ModelSerializer):
    series = SeriesSerializer()

    class Meta:
        model = Category
        fields = "__all__"


class ToothSerializer(serializers.ModelSerializer):
    category = CategorySerializer()

    class Meta:
        model = Tooth
        fields = "__all__"
