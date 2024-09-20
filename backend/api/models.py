from typing import Any
from django.db import models
# CharField é um espaço para campos de texto curto, como o ano não vai ser usado para nenhum calculo, não precisa usar o IntegerField, que é um campo para números inteiros.

class ageRating(models.Model):
    age_rating = models.CharField(max_length=255)

class allGenre(models.Model):
    genre = models.CharField(max_length=255)

class Movies(models.Model):                                                     # FILMES
    title = models.CharField(max_length=255)                                    # TÍTULO
    genre = models.ForeignKey(allGenre, on_delete=models.CASCADE)               # GENERO
    year = models.CharField(max_length=255)                                     # ANO
    language = models.CharField(max_length=255)                                 # IDIOMA
    age_rating = models.ForeignKey(ageRating, on_delete=models.CASCADE)         # CLASSIFICAÇÃO DE IDADE

class Image(models.Model):
    image = models.ImageField(upload_to='poster/', blank=True, null=True)
