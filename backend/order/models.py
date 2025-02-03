from django.db import models


class Order(models.Model):
    customer_name = models.CharField(max_length=50)
    phone = models.CharField(max_length=50)
    email = models.CharField(max_length=50)
    order_type = models.CharField(max_length=50)
    order_date = models.DateField()
    product_name = models.CharField(max_length=50)
    quantity = models.IntegerField()
    remarks = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.customer_name

    class Meta:
        verbose_name_plural = 'Orders'
