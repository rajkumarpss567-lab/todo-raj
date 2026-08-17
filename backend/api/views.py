from django.http import JsonResponse
from rest_framework import viewsets
from .models import Todo
from .serializers import TodoSerializer


def health(request):
    """Liveness probe used by the builder's verify step."""
    return JsonResponse({"status": "ok", "service": "todo-app-backend"})


def about(request):
    """Return about page information."""
    return JsonResponse({
        "app_name": "TaskFlow",
        "version": "1.0.0",
        "description": "A beautiful and intuitive task management application designed to help you stay organized and productive.",
        "mission": "To empower individuals and teams with simple, elegant tools for managing their tasks and reminders.",
        "features": [
            {
                "title": "Smart Task Management",
                "description": "Create, edit, and organize your tasks with ease. Track completion status and add detailed descriptions."
            },
            {
                "title": "Calendar Integration",
                "description": "View your reminders on an interactive calendar. Never miss an important date again."
            },
            {
                "title": "Beautiful Design",
                "description": "Experience a modern, clean interface with smooth animations and intuitive interactions."
            },
            {
                "title": "Dark Mode Support",
                "description": "Seamlessly switch between light and dark themes for comfortable viewing at any time of day."
            },
            {
                "title": "Real-time Sync",
                "description": "All your changes are instantly synchronized across devices and sessions."
            },
            {
                "title": "Productivity Tracking",
                "description": "Monitor your progress with detailed statistics and completion tracking."
            }
        ],
        "team": [
            {
                "name": "Development Team",
                "role": "Backend & API",
                "description": "Robust Django REST Framework powering all features"
            },
            {
                "name": "Frontend Team",
                "role": "UI/UX Design",
                "description": "Beautiful React interface with smooth animations and responsive design"
            },
            {
                "name": "Product Team",
                "role": "Vision & Strategy",
                "description": "Committed to building the best task management experience"
            }
        ],
        "contact": {
            "email": "support@taskflow.app",
            "website": "https://taskflow.app",
            "github": "https://github.com/taskflow/taskflow"
        }
    })


class TodoViewSet(viewsets.ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
