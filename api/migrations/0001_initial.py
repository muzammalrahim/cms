# Generated by Django 3.0 on 2020-10-04 20:06

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Role',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('role', models.CharField(blank=True, choices=[('ADMIN', 'admin'), ('USER', 'user')], max_length=10)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='user_role', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
