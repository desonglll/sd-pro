from django.contrib import admin

from card.models import Card, Nav


@admin.register(Card)
class CardAdmin(admin.ModelAdmin):
    list_display = ["title", "content"]
    search_fields = ["title", "content"]


@admin.register(Nav)
class NavAdmin(admin.ModelAdmin):
    list_display = ["name", "slug"]
    search_fields = ["name"]
