from django.contrib import admin

from news.models import News, NewsImage


class NewsImageInline(admin.TabularInline):
    model = NewsImage
    extra = 1
    fields = ["image", "caption"]


@admin.register(NewsImage)
class NewsImageAdmin(admin.ModelAdmin):
    list_display = ["image", "created_at"]


@admin.register(News)
class NewsAdmin(admin.ModelAdmin):
    list_display = ["title", "created_at"]
    inlines = [NewsImageInline]
