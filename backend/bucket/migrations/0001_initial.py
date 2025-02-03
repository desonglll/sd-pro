# Generated by Django 5.1.5 on 2025-02-03 06:36

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Series',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(default='Unnamed Series', max_length=255, unique=True)),
                ('title', models.CharField(max_length=255, unique=True)),
            ],
            options={
                'verbose_name_plural': 'Series',
            },
        ),
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(default='Unnamed Category', max_length=255, unique=True)),
                ('title', models.CharField(blank=True, max_length=255, null=True, unique=True)),
                ('description', models.TextField(blank=True, null=True)),
                ('image_src', models.URLField(blank=True, null=True)),
                ('slug', models.SlugField(blank=True, max_length=255, null=True, unique=True)),
                ('series', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='bucket.series')),
            ],
            options={
                'verbose_name_plural': 'Categories',
            },
        ),
        migrations.CreateModel(
            name='Tooth',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(default='Unnamed Tooth', max_length=100)),
                ('title', models.CharField(blank=True, max_length=100, null=True)),
                ('description', models.TextField(blank=True, null=True)),
                ('image', models.ImageField(blank=True, null=True, upload_to='uploads/')),
                ('image_src', models.URLField(blank=True, null=True)),
                ('category', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='bucket.category')),
            ],
        ),
    ]
