from django.contrib.auth import get_user_model
from rest_framework import viewsets
from rest_framework.decorators import action
from drf_yasg import openapi
from drf_yasg.utils import swagger_auto_schema
from django.utils.decorators import method_decorator

from course.models import UserSkill

from .serializers import (
    BaseProductSerializer,
    UserSkillSerializer,
)

# User = get_user_model()


class TrackerViewSet(viewsets.ModelViewSet):
    """Вьюсет трекера развития."""
    queryset = UserSkill.objects.all()
    serializer_class = UserSkillSerializer

    # @swagger_auto_schema(
    #     methods=['POST'],
    #     request_body=openapi.Schema(type=openapi.TYPE_OBJECT),
    #     responses={201: BaseProductSerializer()},
    #     operation_summary='Рекомендации для пользователя.',
    #     operation_description=
    #         'Показывает рекомендации: курсы, практика,'
    #         'для ппрофиля пользователя'
    # )
    # @action(
    #     detail=False,
    #     methods=['get',],
    #     serializer_class = BaseProductSerializer
    # )
    # def recommendations(self):
    #     pass
    
    @swagger_auto_schema(
        responses={200: UserSkillSerializer(many=True)},
        operation_summary='Список навыков пользователя',
        operation_description=(
            'Выводит парметры прфиля пользователя трекера'
        )
    )
    def list(self, request, *args, **kwargs):
        return super().list(request, *args, **kwargs)
    
    @swagger_auto_schema(
        responses={200: UserSkillSerializer(many=True)},
        operation_summary='Редактирование парамеров пользователя',
        operation_description=(
            'Позваляет отредактировать параметры: профессия и грейт(level)'
        )
    )
    def partial_update(self, request, *args, **kwargs):
        return super().partial_update(request, *args, **kwargs)

# class RecommendationsViewSet(viewsets.ModelViewSet):
#     pass