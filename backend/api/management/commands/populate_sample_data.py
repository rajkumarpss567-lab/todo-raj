from django.core.management.base import BaseCommand
from django.utils import timezone
from datetime import timedelta
from api.models import Todo


class Command(BaseCommand):
    help = 'Populate the database with sample todo data'

    def handle(self, *args, **options):
        # Clear existing todos
        Todo.objects.all().delete()

        sample_todos = [
            {
                'title': 'Learn React Hooks',
                'description': 'Master useEffect, useState, useContext, and custom hooks for building dynamic React components.',
                'completed': True,
            },
            {
                'title': 'Build Todo App MVP',
                'description': 'Complete the minimum viable product including CRUD operations, task filtering, and basic UI design.',
                'completed': True,
            },
            {
                'title': 'Design Database Schema',
                'description': 'Plan and design the database models including relationships, indexes, and constraints for optimal performance.',
                'completed': False,
            },
            {
                'title': 'Implement Authentication',
                'description': 'Add user authentication with JWT tokens, secure password hashing, and session management.',
                'completed': False,
            },
            {
                'title': 'Write API Documentation',
                'description': 'Create comprehensive API documentation using Swagger/OpenAPI specification with examples.',
                'completed': False,
            },
            {
                'title': 'Setup CI/CD Pipeline',
                'description': 'Configure continuous integration with GitHub Actions and deploy to production environment.',
                'completed': False,
            },
            {
                'title': 'Add Dark Mode Theme',
                'description': 'Implement dark mode toggle with CSS variables and persist user preference in localStorage.',
                'completed': True,
            },
            {
                'title': 'Optimize Database Queries',
                'description': 'Add database indexing, implement caching strategies, and optimize N+1 queries.',
                'completed': False,
            },
            {
                'title': 'Create Unit Tests',
                'description': 'Write comprehensive unit tests for all API endpoints and frontend components with >80% coverage.',
                'completed': False,
            },
            {
                'title': 'Add Email Notifications',
                'description': 'Integrate email service to send task reminders and notifications to users.',
                'completed': False,
            },
            {
                'title': 'Deploy to Staging',
                'description': 'Deploy application to staging environment for testing before production release.',
                'completed': False,
            },
            {
                'title': 'Gather User Feedback',
                'description': 'Collect feedback from beta users and plan improvements based on their suggestions.',
                'completed': False,
            },
        ]

        # Create todos with staggered creation times for visual effect
        base_time = timezone.now() - timedelta(days=30)
        
        for i, todo_data in enumerate(sample_todos):
            todo = Todo(
                title=todo_data['title'],
                description=todo_data['description'],
                completed=todo_data['completed'],
            )
            # Manually set created_at after creating the instance
            todo.created_at = base_time + timedelta(days=i)
            todo.updated_at = todo.created_at + timedelta(hours=2)
            todo.save()

        self.stdout.write(
            self.style.SUCCESS(f'Successfully created {len(sample_todos)} sample todos')
        )
