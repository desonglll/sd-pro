# Generated by Django 5.1.5 on 2025-02-10 02:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('bucket', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='category',
            name='language',
            field=models.CharField(default='en', max_length=255),
        ),
    ]
