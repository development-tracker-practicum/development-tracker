from rest_framework import serializers
from djoser.serializers import UserSerializer

from course.models import UserSkill, Skill, BaseProduct
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
        fields = ('__all__')


class UserSkillSerializer(serializers.ModelSerializer):
    """Сериализатор профиля пользователя в трекере."""

    user_id = CustomUserSerializer(read_only=True)
    skill_id = SkillSerializer(read_only=True)

    class Meta:
        model = UserSkill
        fields = ('user_id', 'skill_id', 'accordance')


class BaseProductSerializer(serializers.ModelSerializer):
    """Сериализатор курсов для пользователя."""

    class Meta:
        model = BaseProduct
        fields = ('__all__')
