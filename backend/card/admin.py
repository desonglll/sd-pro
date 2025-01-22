from django.contrib import admin

from card.models import Card


@admin.register(Card)
class CardAdmin(admin.ModelAdmin):
    list_display = ["title", "content"]
    search_fields = ["title", "content"]

    def save_model(self, request, obj, form, change):
        if not obj.image_src:
            obj.image_src = "https://www.global.weir/globalassets/phase--process-page-images/wear-parts---general-industry---metal-recycling/hero-image/Metal_Shredder.jpg?width=900&format=webp&quality=90"
        return super().save_model(request, obj, form, change)
