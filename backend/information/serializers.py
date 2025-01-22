from rest_framework import serializers

from information.models import Information, Member


class MemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Member
        fields = ["id", "name", "email", "phone"]


class InformationSerializer(serializers.ModelSerializer):
    member = MemberSerializer(many=True)

    class Meta:
        model = Information
        fields = "__all__"
