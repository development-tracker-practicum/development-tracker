from django.contrib.auth import get_user_model
from django.core.validators import MinValueValidator, MaxValueValidator
from django.db import models
from django.utils.translation import gettext_lazy as _

User = get_user_model()


class BaseProduct(models.Model):

    name = models.CharField(
        verbose_name=_("Назване"),
        unique=True,
        blank=False,
        max_length=200
    )
    description = models.TextField(
        verbose_name=_("Описание"),
    )
    images = models.ImageField(
        verbose_name=_("Превью"),
        upload_to="img/",
        null=True,
        blank=False
    ) 
    price = models.DecimalField(
        verbose_name=_("Стоимость"),
        decimal_places = 2,
        max_digits=13,
    )
    studying_time = models.DurationField(
        verbose_name=_("Время обучения"),
        blank=False,
    )

    class Meta:
        abstract = True

    def __str__(self):
        return self.name


class Tag(models.Model):
    name = models.CharField(
        verbose_name=_("Тэг"),
        unique=True,
        blank=False,
        max_length=200
    )

    class Meta:
        ordering = ["name"]
        verbose_name = _("Тэг")
        verbose_name_plural = _("Теги")

    def __str__(self):
        return self.name


class Grade(models.Model):
    name = models.CharField(
        verbose_name=_("Грейт"),
        unique=True,
        blank=False,
        max_length=200
    )

    class Meta:
        ordering = ["name"]
        verbose_name = _("Грейт")
        verbose_name_plural = _("Грейты")

    def __str__(self):
        return self.name


class Special(models.Model):
    title = models.CharField(
        verbose_name=_("Профессия"),
        unique=True,
        blank=False,
        max_length=200
    )

    class Meta:
        ordering = ["title"]
        verbose_name = _("Профессия")
        verbose_name_plural = _("Профессии")

    def __str__(self):
        return self.name


class Skill(models.Model):
    name = models.CharField(
        verbose_name=_("Навык"),
        max_length=200,
    )
    description = models.TextField(
        verbose_name=_("Описание навыка"),
    )

    class Meta:
        ordering = ["name"]
        verbose_name = _("Навык")
        verbose_name_plural = _("Навыки")

    def __str__(self):
        return self.name


class UserLevel(models.Model):
    user_id = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name="user_level",
        verbose_name=_("Пользователь"),
    )
    level_id = models.ForeignKey(
        "Level",
        on_delete=models.CASCADE,
        related_name="user_level",
        verbose_name=_("Уровень"),
    )
    terget = models.BooleanField(
        verbose_name=_("Цель"),
        default=False
    )

    class Meta:
        ordering = ["user_id"]
        verbose_name = _("Направление пользователя")
        verbose_name_plural = _("Направления пользователя")

    def __str__(self):
        return f"{self.user_id} {self.level_id}"


class Level(models.Model):

    special_id = models.ForeignKey(
        Special,
        on_delete=models.CASCADE,
        related_name="level",
        verbose_name=_("Профессия"),
    )
    grade_id = models.ForeignKey(
        Grade,
        on_delete=models.CASCADE,
        related_name="level",
        verbose_name=_("Грейт"),
    )
    skill_id = models.ManyToManyField(
        Skill,
        related_name="level",
        verbose_name=_("Навыки"),
    )
    class Meta:
        ordering = ["grade_id"]
        verbose_name = _("Уровень професии")
        verbose_name_plural = _("Уровни профессии")

    def __str__(self):
        return f"{self.special_id} {self.grade_id}"


class Course(BaseProduct):

    tags = models.ManyToManyField(
        Tag,
        related_name="curse",
        verbose_name=_("Тэги"),
    )
    level_id = models.ForeignKey(
        Level,
        on_delete=models.CASCADE,
        related_name="curse",
        verbose_name=_("Уровень"),
    )
    modul_id = models.ManyToManyField(
        "Modul",
        related_name="curse",
        verbose_name=_("Модули"),
    )

    class Meta:
        ordering = ["name"]
        verbose_name = _("Курс")
        verbose_name_plural = _("Курсы")
    

class Modul(BaseProduct):

    tags = models.ManyToManyField(
        Tag,
        related_name="modul",
        verbose_name=_("Тэги"),
    )
    level_id = models.ForeignKey(
        Level,
        on_delete=models.CASCADE,
        related_name="modul",
        verbose_name=_("Уровень"),
    )
    theme = models.ManyToManyField(
        "Theme",
        related_name="modul",
        verbose_name=_("Темы"),
    )

    class Meta:
        ordering = ["name"]
        verbose_name = _("Модуль")
        verbose_name_plural = _("Модули")


class Theme(BaseProduct):

    tags = models.ManyToManyField(
        Tag,
        related_name="them",
        verbose_name=_("Тэги"),
    )
    level_id = models.ForeignKey(
        Level,
        on_delete=models.CASCADE,
        related_name="them",
        verbose_name=_("Уровень"),
    )

    class Meta:
        ordering = ["name"]
        verbose_name = _("Темы")
        verbose_name_plural = _("Темы")


class UserSkill(models.Model):

    user_id =  models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name="user_skill",
        verbose_name=_("Пользователь"),
    )
    skill_id =  models.ForeignKey(
        Skill,
        on_delete=models.CASCADE,
        related_name="user_skill",
        verbose_name=_("Навык"),
    )

    accordance = models.PositiveIntegerField(
        verbose_name=_("Процент соответствия"),
        validators=[
            MinValueValidator(
                limit_value=1, message=_("Минимальный процент навыка")
            ),
            MaxValueValidator(
                limit_value=100, message=_("Максимальный процент навыка")
            )
        ],
    )

    class Meta:
        ordering = ["accordance"]
        verbose_name = _("Навык пользователя")
        verbose_name_plural = _("Навыки пользователя")

    def __str__(self):
        return f"{self.user_id} {self.skill_id} {self.accordance}%"
