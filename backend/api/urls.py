from django.urls import include, path
from rest_framework import permissions
from rest_framework.routers import DefaultRouter

# from .views import UserViewSet


app_name = 'api'

router = DefaultRouter()

# router.register('users', UserViewSet)


urlpatterns = [
    path('v1/', include(router.urls)),
    path('v1/', include('djoser.urls')),
    path('v1/auth/', include('djoser.urls.authtoken')),
]
