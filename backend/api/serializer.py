from rest_framework import serializers
from .models import Movies, allGenre, ageRating

class ageRatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = ageRating
        fields = ['id', 'age_rating']

class GenreSerializer(serializers.ModelSerializer):
    class Meta:
        model = allGenre
        fields = ['id', 'genre']

class MoviesSerializer(serializers.ModelSerializer):
    class Meta:                     # o 'meta' é um método do próprio django
        model = Movies
        fields = ['id', 'title', 'genre', 'year', 'language', 'age_rating']
        # 'urlImage', 'imagem'
        

        
        