import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Text, View, TextInput, Pressable } from 'react-native';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home() {

    // variáveis GET
  const [id, setID] = useState('');
  const [movieG, setMovieG] = useState('');
  const [genreG, setGenreG] = useState('');
  const [yearG, setYearG] = useState('');
  const [languageG, setLanguageG] = useState('');
  const [age_ratingG, setAgeG] = useState('');

    //variáveis POST
  const [movie, setMovie] = useState('');
  const [genre, setGenre] = useState('');
  const [year, setYear] = useState('');
  const [language, setLanguage] = useState('');
  const [age_rating, setAge] = useState('');
  const [token, setToken] = useState('');

  useEffect(()=>{                                             // faz parte da renderização da tela, ele executa tudo quando a pagina é carregada
    AsyncStorage.getItem('token')
        .then(
            (resp) => {
                if (token != null) {
                    console.log('Token home: ', resp);
                    setToken(resp);
                }
            }
        )
        .catch(
            (error) => {
                console.error('Can not saved.', error);
            }
        )
  }, []); 

  const capture = async ()=> {
    try {
        const response = await axios.get (
            'http://127.0.0.1:8000/api/movie/' + id, 
            {
              headers: {
                  Authorization: `Bearer ${token}`,
              },
            }
        )

        const responseGenre = await axios.get (
          'http://127.0.0.1:8000/api/genre/' + response.data.genre, 
          {
            headers: {
                Authorization: `Bearer ${token}`,
            },
          }
      )

      const responseAgeRating = await axios.get (
        'http://127.0.0.1:8000/api/ageRating/' + response.data.age_rating, 
        {
          headers: {
              Authorization: `Bearer ${token}`,
          },
        }
    )
      
      setGenreG(response.data.genre)
        
        console.log(response.data)
        setMovieG(response.data.title)
        setGenreG(responseGenre.data.genre)
        setYearG(response.data.year)
        setLanguageG(response.data.language)
        setAgeG(responseAgeRating.data.age_rating)

    } catch {
        console.log(Error)
    }
  }  //Aqui eu fiz o método GET, eu dei o caminho da API concatenado com a const ID que eu crei lá em cima onde eu puxo as minhas informações e depois eu uso as 
  //consts de GET q eu criei recebendo as data(dados) dos consts POST depois eu vou no meu botão GET (ta lá em baixo) e coloco um onPress=(capture) para ele puxar 
  //a informação a respeito do ID que eu pedi

  const send = async ()=> {
    try {
      const response = {
        title: movie,
        genre: genre,
        year: year,
        language: language,
        age_rating: age_rating
      };
      
      await axios.post (
        'http://127.0.0.1:8000/api/movieslist/', response, 
        {
          headers: {
              Authorization: `Bearer ${token}`,
          },
        }
      );

        alert('Added movie.')
        setMovie('')
        setGenre('')
        setYear('')
        setLanguage('')
        setAge('')

        console.log('Successful.')

    } catch (error) {
      console.log(Error)
    }
  }  //Aqui eu fiz o método POST, eu dei o caminho da API onde eu vou subir as minhas informações e depois abrindo chaves {} eu coloquei os campos das informações para que
  // funcionasse como um JSON, depois eu vou no meu botão POST (ta lá em baixo) e coloco um onPress=(send) para ele dar o POST do meu JSON preenchido. 

  const update = async ()=> {
    try {
      await axios.put (
        'http://127.0.0.1:8000/api/movie/' + id,
        {
          title: movieG,
          genre: genreG,
          year: yearG,
          language: languageG,
          age_rating: age_ratingG
        },
        {
          headers: {
              Authorization: `Bearer ${token}`,
          },
        }
      )
      console.log('Successful.')
    } catch (error) {
      console.log(error)
    }
  }

  const exclude = async ()=> {
    try {
      const response = {
        title: movie,
        genre: genre,
        year: year,
        language: language,
        age_rating: age_rating
      }
      
      await axios.delete (
        'http://127.0.0.1:8000/api/movie/' + id, 
        {
          headers: {
              Authorization: `Bearer ${token}`,
          },
        },
        response 
      )
        alert('Removed movie.')
        setMovieG('')
        setGenreG('')
        setYearG('')
        setLanguageG('')
        setAgeG('')

        console.log('Successful.')

    } catch (error) {
      console.log(Error)
    }
  }

  return (
    <View style={styles.container}>

      <View style={styles.styleGet}>
        <Text style={{marginBottom:10, fontWeight:'bold'}}>GET</Text>
        <View style={{flexDirection:'row'}}>
          <Text style={styles.boxText}>ID:</Text>
          <TextInput
            value={id}
            onChangeText={(e)=>{setID(e)}}
            style={styles.boxID}
        />

        <Pressable style={styles.btn} onPress={capture}>
          <Text style={{fontWeight:'bold', color: "#fff"}}>GET</Text>
        </Pressable>

        <Pressable style={styles.btn} onPress={update}>
          <Text style={{fontWeight:'bold', color: "#fff"}}>PUT</Text>
        </Pressable>

        <Pressable style={styles.btn} onPress={exclude}>
          <Text style={{fontWeight:'bold', color: "#fff"}}>DELETE</Text>
        </Pressable>
        </View>



        <Text style={styles.boxText}>Title</Text>
        <TextInput
          style={styles.boxGet}
          value={movieG}
          onChangeText={(e)=>setMovieG(e)}/>

        <Text style={styles.boxText}>Genre</Text>
        <TextInput
          style={styles.boxGet}
          value={genreG}
          onChangeText={(e)=>setGenreG(e)}/>

        <View style={styles.banner}>
          <View style={styles.column}>
            <Text style={styles.boxText}>Year</Text>
            <TextInput
              style={styles.boxNew}
              value={yearG}
              onChangeText={(e)=>setYearG(e)}/>

            <Text style={styles.boxText}>Language</Text>
            <TextInput
              style={styles.boxNew}
              value={languageG}
              onChangeText={(e)=>setLanguageG(e)}/>

            <Text style={styles.boxText}>Age rating</Text>
            <TextInput
              style={styles.boxNew}
              value={age_ratingG}
              onChangeText={(e)=>setAgeG(e)}/>
          </View>

          <View style={styles.poster}></View>

        </View>
        
      </View>

      <View style={styles.stylePost}>
        <Text>POST</Text>

        <Text style={styles.boxText}>Title</Text>
        <TextInput 
          value={movie}
          onChangeText={(e)=>{setMovie(e)}}
          style={styles.boxPost}
        />

        <Text style={styles.boxText}>Genre</Text>
        <TextInput 
          value={genre}
          onChangeText={(e)=>{setGenre(e)}}
          style={styles.boxPost}
        />

        <View style={styles.banner}>
          <View style={styles.column}>
            <Text style={styles.boxText}>Year</Text>
            <TextInput 
              value={year}
              onChangeText={(e)=>{setYear(e)}}
              style={styles.boxNew}
            />

            <Text style={styles.boxText}>Language</Text>
            <TextInput 
              value={language}
              onChangeText={(e)=>{setLanguage(e)}}
              style={styles.boxNew}
            />

            <Text style={styles.boxText}>Age rating</Text>
            <TextInput 
              value={age_rating}
              onChangeText={(e)=>{setAge(e)}}
              style={styles.boxNew}
            />
          </View>

          <Pressable style={styles.poster}></Pressable>
        </View>

        <Pressable style={styles.btn} onPress={send}>
          <Text style={{fontWeight:'bold', color: "#fff"}}>POST</Text>
        </Pressable>
      </View>
    </View>
  )
}