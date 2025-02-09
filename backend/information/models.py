from django.db import models
from django.utils.text import slugify

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


class AboutUs(models.Model):
    name = models.CharField(max_length=100, default="about us")
    title = models.CharField(max_length=100, default="About Us")
    content = models.TextField(null=True, blank=True)

    class Meta:
        verbose_name_plural = "About Us"

    def __str__(self):
        return self.title


class AboutUsImage(models.Model):
    about_us = models.ForeignKey(AboutUs, on_delete=models.CASCADE, related_name="images")
    image = models.ImageField(upload_to="about_us_images/")
    caption = models.CharField(max_length=255, blank=True, null=True)  # 图片的标题或描述（可选）

    class Meta:
        verbose_name_plural = "About Us Images"

    def __str__(self):
        return f"Image for {self.about_us.title}"
