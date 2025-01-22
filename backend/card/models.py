from django.db import models

from bucket.models import Tooth


class Card(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField(null=True, blank=True)
    image_src = models.URLField(null=True, blank=True)
    nav = models.ManyToManyField(Tooth, related_name="navs", blank=True)

    def __str__(self):
        return self.title
