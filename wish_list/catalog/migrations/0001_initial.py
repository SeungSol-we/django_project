# Generated by Django 5.1.4 on 2024-12-20 07:41

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='itemregistration',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('amount', models.IntegerField(help_text='물건의 가격을 입력해 주세요.')),
                ('info', models.TextField(help_text='물건의 정보를 입력해주세요.', max_length=1000)),
                ('name', models.CharField(help_text='물건의 이름을 입력해 주세요.', max_length=200)),
                ('status', models.CharField(blank=True, choices=[('false', '구매 X'), ('true', '구매 O')], default='false', help_text='구매 여부를 선택해 주세요.', max_length=7)),
                ('satisfaction', models.IntegerField(blank=True, choices=[(1, '불만족'), (2, '보통'), (3, '만족')], help_text='구매 후 만족도를 선택하세요.', null=True)),
            ],
        ),
    ]
