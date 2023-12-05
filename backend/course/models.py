from django.contrib.auth import get_user_model
from django.core.validators import MinValueValidator, MaxValueValidator
from django.db import models
from django.utils.translation import gettext_lazy as _

User = get_user_model()


class BaseProduct(models.Model):

    title = models.CharField(
        verbose_name=_("Назване"),
        unique=True,
        blank=False,
        max_length=200
    )

    price = models.DecimalField(
        verbose_name=_("Стоимость"),
        decimal_places = 2,
        max_digits=13,
    )

    class Meta:
        abstract = True

    def __str__(self):
        return self.title


class SecondProduct(models.Model):
    title = models.CharField(
        verbose_name=_("Назване"),
        unique=True,
        blank=False,
        max_length=200
    )
    url = models.URLField(
        verbose_name=_("Ссылка"),
        max_length=200
    )

    class Meta:
        abstract = True

    def __str__(self):
        return self.title


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
    class Meta:
        ordering = ["special_id"]
        verbose_name = _("Уровень професии")
        verbose_name_plural = _("Уровни профессии")

    def __str__(self):
        return f"{self.special_id} {self.grade_id}"


class Course(BaseProduct):

    description = models.TextField(
        verbose_name=_("Описание"),
    )
    level_id = models.ForeignKey(
        Level,
        on_delete=models.CASCADE,
        related_name="course",
        verbose_name=_("Уровень"),
    )

    class Meta:
        ordering = ["title"]
        verbose_name = _("Курс")
        verbose_name_plural = _("Курсы")
    

class Modul(BaseProduct):
    length = models.IntegerField(
        verbose_name=_("Время обучения в часах"),
    )
    course_id = models.ForeignKey(
        Course,
        on_delete=models.CASCADE,
        related_name="modul",
        verbose_name=_("Курс"),
    )

    class Meta:
        ordering = ["title"]
        verbose_name = _("Модуль")
        verbose_name_plural = _("Модули")


class Theme(BaseProduct):

    modul = models.ForeignKey(
        Modul,
        on_delete=models.CASCADE,
        related_name="theme",
        verbose_name=_("модуль"),
    )
    level_skill_id = models.ForeignKey(
        "LevelSkill",
        on_delete=models.CASCADE,
        related_name="theme",
        verbose_name=_("Навык для темы"),
    )

    class Meta:
        ordering = ["title"]
        verbose_name = _("Темы")
        verbose_name_plural = _("Темы")


class Pract(SecondProduct):

    level_id = models.ForeignKey(
        Level,
        on_delete=models.CASCADE,
        related_name="pract",
        verbose_name=_("Уровень"),
    )
    class Meta:
        ordering = ["title"]
        verbose_name = _("Практика")
        verbose_name_plural = _("Практики")


class Pub(SecondProduct):
    title = models.CharField(
        verbose_name=_("Назване"),
        unique=True,
        blank=False,
        max_length=200
    )
    url = models.URLField(
        verbose_name=_("Ссылка"),
        max_length=200
    )
    level_id = models.ForeignKey(
        Level,
        on_delete=models.CASCADE,
        related_name="pub",
        verbose_name=_("Уровень"),
    )

    class Meta:
        ordering = ["title"]
        verbose_name = _("Статья")
        verbose_name_plural = _("Статьи")


class LevelSkill(models.Model):

    level_id = models.ForeignKey(
        Level,
        on_delete=models.CASCADE,
        related_name="level_skill",
        verbose_name=_("Уровень"),
    )
    skill_id = models.ForeignKey(
        Skill,
        on_delete=models.CASCADE,
        related_name="level_skill",
        verbose_name=_("Уровень"),
    )

    class Meta:
        ordering = ["level_id"]
        verbose_name = _("Навык профессии")
        verbose_name_plural = _("Навыки профессии")

    def __str__(self):
        return f"{self.level_id} {self.skill_id}"


class UserLevel(models.Model):
    user_id = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name="user_level",
        verbose_name=_("Пользователь"),
    )
    level_skill_id = models.ForeignKey(
        LevelSkill,
        on_delete=models.CASCADE,
        related_name="user_level",
        verbose_name=_("Уровень профессии"),
    )
    goal = models.BooleanField(
        verbose_name=_("Цель"),
        default=False
    )
    value = models.PositiveIntegerField(
        verbose_name=_("Процент соответствия"),
        validators=[
            MinValueValidator(
                limit_value=0, message=_("Минимальный процент навыка 0")
            ),
            MaxValueValidator(
                limit_value=100, message=_("Максимальный процент навыка 100")
            )
        ],
    )

    class Meta:
        ordering = ["user_id"]
        verbose_name = _("Направление пользователя")
        verbose_name_plural = _("Направления пользователя")

    def __str__(self):
        return f"{self.user_id} {self.level_skill_id} {self.value}%"
    

class UserCourse(models.Model):

    user_id = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name="user_course",
        verbose_name=_("Пользователь"),
    )
    course_id = models.ForeignKey(
        Course,
        on_delete=models.CASCADE,
        related_name="user_course",
        verbose_name=_("Курс"),
    )

    class Meta:
        ordering = ["course_id"]
        verbose_name = _("Оконченный курс")
        verbose_name_plural = _("Оконченный курс")

    def __str__(self):
        return f"{self.user_id} closed {self.course_id}"