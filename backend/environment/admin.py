from django.contrib import admin

from environment.models import EnvironmentImage, Environment


# Register your models here.
class EnvironmentImageInline(admin.TabularInline):
    model = EnvironmentImage
    extra = 1
    fields = ["image", "caption"]


@admin.register(EnvironmentImage)
class EnvironmentImageAdmin(admin.ModelAdmin):
    list_display = ["image", "created_at"]


@admin.register(Environment)
class EnvironmentAdmin(admin.ModelAdmin):
    list_display = ["title"]
    inlines = [EnvironmentImageInline]
