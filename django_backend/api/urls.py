from django.urls import path
from .views import dashboard_api,signup_api,register_user
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('signup/', signup_api),
    path('login/', TokenObtainPairView.as_view()),
    path('token/refresh/', TokenRefreshView.as_view()),
    path("dashboard/", dashboard_api, name="dashboard"),
    path("register/", register_user, name="register_user"),
    
]