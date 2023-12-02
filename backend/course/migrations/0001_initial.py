# Generated by Django 4.1 on 2023-12-02 21:55

from django.conf import settings
import django.core.validators
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):
    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name="Grade",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "name",
                    models.CharField(max_length=200, unique=True, verbose_name="Грейт"),
                ),
            ],
            options={
                "verbose_name": "Грейт",
                "verbose_name_plural": "Грейты",
                "ordering": ["name"],
            },
        ),
        migrations.CreateModel(
            name="Level",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "grade_id",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="level",
                        to="course.grade",
                        verbose_name="Грейт",
                    ),
                ),
            ],
            options={
                "verbose_name": "Уровень професии",
                "verbose_name_plural": "Уровни профессии",
                "ordering": ["grade_id"],
            },
        ),
        migrations.CreateModel(
            name="Skill",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=200, verbose_name="Навык")),
                ("description", models.TextField(verbose_name="Описание навыка")),
            ],
            options={
                "verbose_name": "Навык",
                "verbose_name_plural": "Навыки",
                "ordering": ["name"],
            },
        ),
        migrations.CreateModel(
            name="Special",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "title",
                    models.CharField(
                        max_length=200, unique=True, verbose_name="Профессия"
                    ),
                ),
            ],
            options={
                "verbose_name": "Профессия",
                "verbose_name_plural": "Профессии",
                "ordering": ["title"],
            },
        ),
        migrations.CreateModel(
            name="Tag",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "name",
                    models.CharField(max_length=200, unique=True, verbose_name="Тэг"),
                ),
            ],
            options={
                "verbose_name": "Тэг",
                "verbose_name_plural": "Теги",
                "ordering": ["name"],
            },
        ),
        migrations.CreateModel(
            name="UserSkill",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "accordance",
                    models.PositiveIntegerField(
                        validators=[
                            django.core.validators.MinValueValidator(
                                limit_value=1, message="Минимальный процент навыка"
                            ),
                            django.core.validators.MaxValueValidator(
                                limit_value=100, message="Максимальный процент навыка"
                            ),
                        ],
                        verbose_name="Процент соответствия",
                    ),
                ),
                (
                    "skill_id",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="user_skill",
                        to="course.skill",
                        verbose_name="Навык",
                    ),
                ),
                (
                    "user_id",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="user_skill",
                        to=settings.AUTH_USER_MODEL,
                        verbose_name="Пользователь",
                    ),
                ),
            ],
            options={
                "verbose_name": "Навык пользователя",
                "verbose_name_plural": "Навыки пользователя",
                "ordering": ["accordance"],
            },
        ),
        migrations.CreateModel(
            name="UserLevel",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "level_id",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="user_level",
                        to="course.level",
                        verbose_name="Уровень",
                    ),
                ),
                (
                    "user_id",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="user_level",
                        to=settings.AUTH_USER_MODEL,
                        verbose_name="Пользователь",
                    ),
                ),
            ],
            options={
                "verbose_name": "Направление пользователя",
                "verbose_name_plural": "Направления пользователя",
                "ordering": ["user_id"],
            },
        ),
        migrations.CreateModel(
            name="Theme",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "name",
                    models.CharField(
                        max_length=200, unique=True, verbose_name="Назване"
                    ),
                ),
                ("description", models.TextField(verbose_name="Описание")),
                (
                    "images",
                    models.ImageField(
                        null=True, upload_to="img/", verbose_name="Превью"
                    ),
                ),
                (
                    "price",
                    models.DecimalField(
                        decimal_places=2, max_digits=13, verbose_name="Стоимость"
                    ),
                ),
                ("studying_time", models.DurationField(verbose_name="Время обучения")),
                (
                    "level_id",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="them",
                        to="course.level",
                        verbose_name="Уровень",
                    ),
                ),
                (
                    "tags",
                    models.ManyToManyField(
                        related_name="them", to="course.tag", verbose_name="Тэги"
                    ),
                ),
            ],
            options={
                "verbose_name": "Темы",
                "verbose_name_plural": "Темы",
                "ordering": ["name"],
            },
        ),
        migrations.CreateModel(
            name="Modul",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "name",
                    models.CharField(
                        max_length=200, unique=True, verbose_name="Назване"
                    ),
                ),
                ("description", models.TextField(verbose_name="Описание")),
                (
                    "images",
                    models.ImageField(
                        null=True, upload_to="img/", verbose_name="Превью"
                    ),
                ),
                (
                    "price",
                    models.DecimalField(
                        decimal_places=2, max_digits=13, verbose_name="Стоимость"
                    ),
                ),
                ("studying_time", models.DurationField(verbose_name="Время обучения")),
                (
                    "level_id",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="modul",
                        to="course.level",
                        verbose_name="Уровень",
                    ),
                ),
                (
                    "tags",
                    models.ManyToManyField(
                        related_name="modul", to="course.tag", verbose_name="Тэги"
                    ),
                ),
                (
                    "theme",
                    models.ManyToManyField(
                        related_name="modul", to="course.theme", verbose_name="Темы"
                    ),
                ),
            ],
            options={
                "verbose_name": "Модуль",
                "verbose_name_plural": "Модули",
                "ordering": ["name"],
            },
        ),
        migrations.AddField(
            model_name="level",
            name="skill_id",
            field=models.ManyToManyField(
                related_name="level", to="course.skill", verbose_name="Навыки"
            ),
        ),
        migrations.AddField(
            model_name="level",
            name="special_id",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                related_name="level",
                to="course.special",
                verbose_name="Профессия",
            ),
        ),
        migrations.CreateModel(
            name="Course",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "name",
                    models.CharField(
                        max_length=200, unique=True, verbose_name="Назване"
                    ),
                ),
                ("description", models.TextField(verbose_name="Описание")),
                (
                    "images",
                    models.ImageField(
                        null=True, upload_to="img/", verbose_name="Превью"
                    ),
                ),
                (
                    "price",
                    models.DecimalField(
                        decimal_places=2, max_digits=13, verbose_name="Стоимость"
                    ),
                ),
                ("studying_time", models.DurationField(verbose_name="Время обучения")),
                (
                    "level_id",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="curse",
                        to="course.level",
                        verbose_name="Уровень",
                    ),
                ),
                (
                    "modul_id",
                    models.ManyToManyField(
                        related_name="curse", to="course.modul", verbose_name="Модули"
                    ),
                ),
                (
                    "tags",
                    models.ManyToManyField(
                        related_name="curse", to="course.tag", verbose_name="Тэги"
                    ),
                ),
            ],
            options={
                "verbose_name": "Курс",
                "verbose_name_plural": "Курсы",
                "ordering": ["name"],
            },
        ),
    ]
