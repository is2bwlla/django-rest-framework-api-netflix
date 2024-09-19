from django.shortcuts import render                             # renderização que vai ser usada para renderizar/carregar algo no inicio
from .models import Movies, allGenre, ageRating
from .serializer import MoviesSerializer, GenreSerializer, ageRatingSerializer
from rest_framework.response import Response                    # impo
from rest_framework.decorators import api_view                  # é responsável pelos métodos que vc vai usar, get, post
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework import status
from rest_framework.permissions import IsAuthenticated

@api_view(['GET', 'POST'])
def list_movies(request):                                                                       #listar filmes
    if request.method == 'GET':
        queryset = Movies.objects.all()                                                         # o queryset é uma variável que recebe todos os filmes
        serializer = MoviesSerializer(queryset, many=True)                                      # vai me entregar todos os filmes em "formato" JSON, o many=True é pra ele pegar tudo o que tem dentro do queryset
        return Response(serializer.data)                                                        # o serializer.data são os dados sendo retornados já convertidos em JSON
    
    elif request.method == 'POST':
        serializer = MoviesSerializer(data = request.data)                                      #aqui são os dados em JSON
        if serializer.is_valid():                                                               #se o serializer for válido
            serializer.save()                                                                   #o serializer vai ser salvo
            return Response(serializer.data, status=status.HTTP_201_CREATED)                    #vai retornar uma criação e dar certo
        
        else:
            return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)                #vai retornar que deu errado
        
class MoviesViews(ListCreateAPIView):
    permission_classes = [IsAuthenticated]
    queryset = Movies.objects.all() 
    serializer_class = MoviesSerializer
    
class MoviesDetailView(RetrieveUpdateDestroyAPIView):
    # permission_classes = [IsAuthenticated]          # vai exigir o token
    queryset = Movies.objects.all() 
    serializer_class = MoviesSerializer
    
class GenreViews(RetrieveUpdateDestroyAPIView):
    queryset = allGenre.objects.all()
    serializer_class = GenreSerializer
    
class ageRatingViews(RetrieveUpdateDestroyAPIView):
    queryset = ageRating.objects.all()
    serializer_class = ageRatingSerializer
    

    
