from django.db import models
from django.utils.text import slugify

from bucket.models import Tooth, Category, Series


class Nav(models.Model):
    name = models.CharField(max_length=100, default="Unnamed Nav")
    title = models.CharField(max_length=100)
    series = models.ManyToManyField(Series, blank=True)
    slug = models.SlugField(max_length=100, null=True, blank=True)

    def save(self, *args, **kwargs):
        self.slug = slugify(self.name)
        unique_slug = self.slug
        counter = 1
        while Nav.objects.exclude(id=self.id).filter(slug=unique_slug).exists():
            unique_slug = f"{self.slug}-{counter}"
            counter += 1
        self.slug = unique_slug
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name


class Card(models.Model):
    name = models.CharField(max_length=100, default="Unnamed Card")
    title = models.CharField(max_length=100)
    content = models.TextField(null=True, blank=True)
    image_src = models.URLField(null=True, blank=True)
    navs = models.ManyToManyField(Nav, related_name="navs", blank=True)
    slug = models.SlugField(max_length=100, null=True, blank=True)

    def save(self, *args, **kwargs):
        self.slug = slugify(self.name)
        unique_slug = self.slug
        counter = 1
        while Nav.objects.exclude(id=self.id).filter(slug=unique_slug).exists():
            unique_slug = f"{self.slug}-{counter}"
            counter += 1
        self.slug = unique_slug
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title
