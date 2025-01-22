from django.contrib import admin

from information.models import Member, Information


@admin.register(Member)
class MemberAdmin(admin.ModelAdmin):
    list_display = ["name", "email", "phone"]
    search_fields = ["name"]


@admin.register(Information)
class InformationAdmin(admin.ModelAdmin):
    list_display = ["company_name", "email", "phone", "address"]
