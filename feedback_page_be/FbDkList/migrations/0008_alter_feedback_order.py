# Generated by Django 4.2.3 on 2023-08-05 18:41

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('FbDkList', '0007_order_order_avg_rating'),
    ]

    operations = [
        migrations.AlterField(
            model_name='feedback',
            name='order',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, related_name='feedbacks', to='FbDkList.order'),
        ),
    ]