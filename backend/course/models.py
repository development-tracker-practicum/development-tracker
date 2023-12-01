from django.contrib.auth import get_user_model
from django.core.validators import MinValueValidator, MaxValueValidator
from django.db import models
from django.utils.translation import gettext_lazy as _

User = get_user_model()


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


class Course(models.Model):
    name = models.CharField(
        verbose_name=_("Назване курса"),
        unique=True,
        blank=False,
        max_length=200
    )
    description = models.TextField(
        verbose_name=_("Описание курса"),
    )
    tags = models.ManyToManyField(
        Tag,
        related_name="curse",
        verbose_name=_("Тэги курса"),
    )
    images = models.ImageField(
        verbose_name=_("Превью курса"),
        upload_to="img/",
        null=True,
        blank=False
    ) 
    price = models.DecimalField(
        verbose_name=_("Стоимость курса"),
        decimal_places = 2,
        max_digits=13,
    )
    studying_time = models.DurationField(
        verbose_name=_("Время обучения"),
        blank=False,
    )

    class Meta:
        ordering = ["name"]
        verbose_name = _("Курс")
        verbose_name_plural = _("Курсы")

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


class Track(models.Model):
    name = models.CharField(
        verbose_name=_("Специализация"),
        max_length=200,
    )
    course = models.ManyToManyField(
        Course,
        related_name="track",
        verbose_name=_("Курсы"),
    )

    class Meta:
        ordering = ["name"]
        verbose_name = _("Направление")
        verbose_name_plural = _("Направления")

    def __str__(self):
        return self.name


class UserTrack(models.Model):

    class Greate(models.TextChoices):
        JUNIOR = "J",_("Junior")
        MIDDLE = "M",_("Middle")
        SENIOR = "S",_("Senior")

    user =  models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name="user_track",
        verbose_name=_("Пользователь"),
    )
    track =  models.ForeignKey(
        Track,
        on_delete=models.CASCADE,
        related_name="user_track",
        verbose_name=_("Направление"),
    )
    greate =  models.CharField(
        verbose_name=_("Квалификация"),
        max_length=1,
        choices=Greate.choices,
        default=Greate.JUNIOR,
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
        verbose_name = _("Направление пользователя")
        verbose_name_plural = _("Направления пользователя")

    def __str__(self):
        return f"{self.user} {self.greate} {self.accordance}%"


class SkillsTrack(models.Model):

    track = models.ForeignKey(
        Track,
        on_delete=models.CASCADE,
        related_name="skills_track",
        verbose_name=_("Специализация"),
    )
    skills = models.ForeignKey(
        Skill,
        on_delete=models.CASCADE,
        related_name="skills_track",
        verbose_name=_("Навык"),
    )
    level = models.PositiveIntegerField(
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
        ordering = ["track"]
        verbose_name = _("Навык для направления")
        verbose_name_plural = _("Навыки для направления")

    def __str__(self):
        return f"{self.track} {self.skills} {self.level}%"
