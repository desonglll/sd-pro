from django.contrib import admin

from bucket.models import Tooth, Category, Series


@admin.register(Tooth)
class ToothAdmin(admin.ModelAdmin):
    list_display = ["name"]
    search_fields = ["name", "description"]


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ["name", "title"]
    search_fields = ["name", "title"]


@admin.register(Series)
class SeriesAdmin(admin.ModelAdmin):
    list_display = ["name", "title"]
    search_fields = ["name"]
