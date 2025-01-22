from django.db import models

from bucket.models import Tooth


class Member(models.Model):
    name = models.CharField(max_length=100)
    phone = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)

    def __str__(self): return self.name


class Information(models.Model):
    company_name = models.CharField(max_length=100)
    manager = models.ForeignKey(Member, on_delete=models.CASCADE)
    email = models.EmailField(max_length=100)
    phone = models.CharField(max_length=100)
    address = models.CharField(max_length=100)
    member = models.ManyToManyField(
        Member, related_name="members"
    )
    available = models.BooleanField(default=True)

    def __str__(self):
        return self.company_name
