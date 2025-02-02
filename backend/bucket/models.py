from django.contrib.contenttypes.models import ContentType
from django.db import models

from utils.slug import chinese_to_slug


class Series(models.Model):
    name = models.CharField(max_length=255, unique=True, default="Unnamed Series")
    title = models.CharField(max_length=255, unique=True)

    def __str__(self):
        return f"{self.name}({self.title})"

    class Meta:
        verbose_name_plural = "Series"


class Category(models.Model):
    name = models.CharField(unique=True, max_length=255, default="Unnamed Category")
    title = models.CharField(unique=True, max_length=255, blank=True, null=True)
    description = models.TextField(null=True, blank=True)
    image_src = models.URLField(null=True, blank=True)
    slug = models.SlugField(max_length=255, null=True, blank=True)
    series = models.ForeignKey(Series, on_delete=models.CASCADE)

    def save(self, *args, **kwargs):
        self.slug = chinese_to_slug(self.name)
        # 确保slug唯一
        unique_slug = self.slug
        counter = 1
        while Category.objects.exclude(id=self.id).filter(slug=unique_slug).exists():
            unique_slug = f"{self.slug}-{counter}"
            counter += 1
        self.slug = unique_slug
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.name}({self.title})"

    class Meta:
        verbose_name_plural = 'Categories'


class Tooth(models.Model):
    name = models.CharField(max_length=100, default="Unnamed Tooth")
    title = models.CharField(max_length=100, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    category = models.ForeignKey(
        Category,
        on_delete=models.CASCADE,
        null=True,
        blank=True
    )
    image = models.ImageField(upload_to="uploads/", null=True, blank=True)
    image_src = models.URLField(null=True, blank=True)

    def save(self, *args, **kwargs):
        if not self.image_src:
            self.image_src = "http://sd-get.com/home/2/c/sdvaqx/resource/2020/11/03/5fa0f4dde1a63.jpg"
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name
