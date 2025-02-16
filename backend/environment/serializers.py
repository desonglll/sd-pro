from rest_framework import serializers

from environment.models import EnvironmentImage, Environment


class EnvironmentImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = EnvironmentImage
        fields = "__all__"


class EnvironmentSerializer(serializers.ModelSerializer):
    images = EnvironmentImageSerializer(many=True)

    class Meta:
        model = Environment
        fields = "__all__"
