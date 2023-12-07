from rest_framework import serializers
from djoser.serializers import UserSerializer
from django.db.models import Avg

from django.shortcuts import get_object_or_404

from course.models import UserLevel, LevelSkill, Level, Skill, Pract, Links, UserCourse, Course, Modul, Theme
from users.models import User


class CustomUserSerializer(UserSerializer):
    """Кастомный сериализатор для User на чтение."""

    class Meta:
        model = User
        fields = ('id', 'email', 'username', 'first_name', 'last_name',)


class SkillSerializer(serializers.ModelSerializer):
    """Сериализатор навыков в трекере."""

    class Meta:
        model = Skill
        fields = ('id', 'name', 'description', 'skill_percent')


class LevelSerializer(serializers.ModelSerializer):
    """Сериализатор уровня профессии после окончания курса."""

    class Meta:
        model = Level
        fields = ('profession', 'level')


class LevelSkillSerializer(serializers.ModelSerializer):
    """Сериализатор навыка профессии в трекере."""
    
    level_id = LevelSerializer()
    skill_id = SkillSerializer(many=True)

    class Meta:
        model = LevelSkill
        fields = ('level_id', 'skill_id')


class UserLevelSerializer(serializers.ModelSerializer):
    """Сериализатор направление пользователя в трекере."""

    user_id = CustomUserSerializer(read_only=True)
    level_skill_id = LevelSkillSerializer()
    value = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = UserLevel
        fields = ('id', 'user_id', 'level_skill_id', 'goal', 'value')

    def get_value(self, obj):
        percent = Skill.objects.aggregate(Avg('skill_percent'))
        return format(percent['skill_percent__avg'], '.1f')


class ThemeSerializer(serializers.ModelSerializer):
    """Сериализатор тем в рекомендациях."""

    class Meta:
        model = Theme
        fields = ('id', 'title', 'price',)


class ModulSerializer(serializers.ModelSerializer):
    """Сериализатор модулей в рекомендациях."""

    theme_id = ThemeSerializer(many=True)

    class Meta:
        model = Modul
        fields = ('id', 'title', 'price', 'length', 'theme_id')


class CourseSerializer(serializers.ModelSerializer):
    """Сериализатор курсов в рекомендациях."""

    modul_id = ModulSerializer(many=True)
    level_id = LevelSerializer()

    class Meta:
        model = Course
        fields = (
            'id', 'title', 'description', 'price', 'modul_id', 'level_id'
        )


class PractSerializer(serializers.ModelSerializer):
    """Сериализатор практики в рекомендациях."""

    level_id = LevelSerializer()

    class Meta:
        model = Pract
        fields = ('id', 'title', 'url', 'level_id')


class LinksSerializer(serializers.ModelSerializer):
    """Сериализатор ссылок в рекомендациях."""

    level_id = LevelSerializer()

    class Meta:
        model = Links
        fields = ('id', 'title', 'url', 'level_id')


class UserCourseSerializer(serializers.ModelSerializer):
    """Сериализатор вкладки рекомендации для пользователя."""

    user_id = CustomUserSerializer(read_only=True)
    сourse_id = CourseSerializer(many=True)
    pract_id = PractSerializer(many=True)
    links_id = LinksSerializer(many=True)

    class Meta:
        model = UserCourse
        fields = ('id', 'user_id', 'сourse_id', 'pract_id', 'links_id')

    
