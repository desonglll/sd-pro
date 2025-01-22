# Generated by Django 5.1.5 on 2025-01-22 08:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bucket', '0005_rename_slug_category_slug_url'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='category',
            name='slug_url',
        ),
        migrations.AddField(
            model_name='category',
            name='slug',
            field=models.SlugField(default=models.CharField(max_length=255), max_length=255),
        ),
    ]
