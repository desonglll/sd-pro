from django.db import models


class Environment(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField(blank=True)

    def __str__(self):
        return self.title


class EnvironmentImage(models.Model):
    news = models.ForeignKey(Environment, on_delete=models.CASCADE, related_name="images")
    image = models.ImageField(upload_to="environment_images/")
    created_at = models.DateTimeField(auto_now_add=True)
    caption = models.CharField(max_length=100)
