from django.urls import path
from . import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('movies/', views.list_movies),
    path('movieslist/', views.MoviesViews.as_view()),
    path('movie/<int:pk>', views.MoviesDetailView.as_view()),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('genre/<int:pk>', views.GenreViews.as_view()),
    path('ageRating/<int:pk>', views.ageRatingViews.as_view()),
] #+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
