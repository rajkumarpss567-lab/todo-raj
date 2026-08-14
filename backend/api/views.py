from django.http import JsonResponse
from rest_framework import viewsets
from .models import Todo
from .serializers import TodoSerializer


def health(request):
    """Liveness probe used by the builder's verify step."""
    return JsonResponse({"status": "ok", "service": "todo-app-backend"})


class TodoViewSet(viewsets.ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
