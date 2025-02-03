from django.contrib import admin

from order.models import Order


@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    model = Order
    list_display = ["customer_name", "product_name", "email"]
