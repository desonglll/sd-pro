from rest_framework import serializers

from bucket.models import Tooth, Category


class ToothSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tooth
        fields = ["id", "name", "model", "description", "category", "image_src"]


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ["id", "name", "title", "description", "image_src", "slug"]
