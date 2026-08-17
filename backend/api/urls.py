from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'todos', views.TodoViewSet)

urlpatterns = [
    path("health/", views.health, name="health"),
    path("about/", views.about, name="about"),
    path("", include(router.urls)),
]
