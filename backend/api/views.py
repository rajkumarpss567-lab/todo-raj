from django.http import JsonResponse


def health(request):
    """Liveness probe used by the builder's verify step."""
    return JsonResponse({"status": "ok", "service": "todo-app-backend"})
