from django.contrib import admin

from bucket.models import Tooth, ToothModel, Category


@admin.register(Tooth)
class ToothAdmin(admin.ModelAdmin):
    list_display = ["name", "model"]
    search_fields = ["name", "model__name", "description"]


@admin.register(ToothModel)
class ToothModelAdmin(admin.ModelAdmin):
    list_display = ["name", "company"]
    search_fields = ["name", "company"]


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ["name"]
    search_fields = ["name"]
