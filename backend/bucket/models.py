from django.contrib.contenttypes.models import ContentType
from django.db import models
from django.utils.text import slugify


class Category(models.Model):
    name = models.CharField(unique=True, max_length=255)
    title = models.CharField(max_length=255)
    description = models.TextField(null=True, blank=True)
    image_src = models.URLField(null=True, blank=True)
    slug = models.SlugField(max_length=255, null=True, blank=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            # 如果slug为空，使用name字段生成slug
            self.slug = slugify(self.name)
            # 确保slug唯一
            unique_slug = self.slug
            counter = 1
            while Category.objects.filter(slug=unique_slug).exists():
                unique_slug = f"{self.slug}-{counter}"
                counter += 1
            self.slug = unique_slug
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = 'Categories'


class ToothModel(models.Model):
    name = models.CharField(max_length=100)
    company = models.CharField(max_length=100)

    def __str__(self): return self.name


class Tooth(models.Model):
    name = models.CharField(max_length=100)
    model = models.ForeignKey(
        ToothModel,
        on_delete=models.CASCADE,
        null=True,
        blank=True,
    )
    description = models.TextField(null=True, blank=True)
    category = models.ForeignKey(
        Category,
        on_delete=models.CASCADE,
        null=True,
        blank=True
    )
    image_src = models.URLField(null=True, blank=True)

    def __str__(self): return self.name
