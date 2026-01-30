from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.contrib.auth.models import User
from rest_framework.decorators import api_view
from rest_framework import status
from .tasks import send_email_task
from rest_framework.response import Response


@api_view(['POST'])
def signup_api(request):
    username = request.data.get('username')
    password = request.data.get('password')

    if not username or not password:
        return Response(
            {"error": "username and password required"},
            status=status.HTTP_400_BAD_REQUEST
        )

    if User.objects.filter(username=username).exists():
        return Response(
            {"error": "User already exists"},
            status=status.HTTP_400_BAD_REQUEST
        )

    user = User.objects.create_user(
        username=username,
        password=password
    )

    return Response(
        {"message": "User created successfully"},
        status=status.HTTP_201_CREATED
    )





@api_view(['GET'])
@permission_classes([IsAuthenticated])
def dashboard_api(request):
    return Response({
        "message": f"Welcome {request.user.username}"
    })
    
    
    
@api_view(["POST"])
def register_user(request):
    # user create logic
    send_email_task.delay("siddheshwarkadam72@gmail.com")
    return Response({"message": "User created, email queued"})