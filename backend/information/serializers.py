from rest_framework import serializers

from information.models import Information, Member, AboutUs, AboutUsImage


class MemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Member
        fields = ["id", "name", "email", "phone"]


class InformationSerializer(serializers.ModelSerializer):
    member = MemberSerializer(many=True)

    class Meta:
        model = Information
        fields = "__all__"


class AboutUsImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = AboutUsImage
        fields = "__all__"


class AboutUsSerializer(serializers.ModelSerializer):
    images = AboutUsImageSerializer(many=True, read_only=True)  # 嵌套序列化

    class Meta:
        model = AboutUs
        fields = "__all__"
