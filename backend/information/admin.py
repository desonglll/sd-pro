from django.contrib import admin

from information.models import Member, Information, AboutUs, AboutUsImage


@admin.register(Member)
class MemberAdmin(admin.ModelAdmin):
    list_display = ["name", "email", "phone"]
    search_fields = ["name"]


@admin.register(Information)
class InformationAdmin(admin.ModelAdmin):
    list_display = ["company_name", "email", "phone", "address"]


class AboutUsImagesInline(admin.TabularInline):  # 也可以用 StackedInline
    model = AboutUsImage
    extra = 1
    fields = ["image", "caption"]


@admin.register(AboutUs)
class AboutUsAdmin(admin.ModelAdmin):
    list_display = ["title"]
    inlines = [AboutUsImagesInline]  # 关联图片的 inline


@admin.register(AboutUsImage)
class AboutUsImageAdmin(admin.ModelAdmin):
    list_display = ["about_us", "image", "caption"]
