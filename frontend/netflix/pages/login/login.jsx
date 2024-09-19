import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Text, View, TextInput, Button, Alert, Pressable } from 'react-native';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login({navigation}) {
    const [username, setUser]=useState('');
    const [password, setPassword]=useState('');
    const [token, setToken]=useState('');

    useEffect(()=>{                                             // faz parte da renderização da tela, ele executa tudo quando a pagina é carregada
        AsyncStorage.setItem('token', token)
            .then(
                () => {
                    if (token != null) {
                        console.log('Token login: ', token);
                    }
                }
            )
            .catch(
                (error) => {
                    console.error('Can not saved.', error);
                }
            )
    }, [token]);                                      

    // const handleLogin = async ()=> {                         // to fazendo uma const assincrona
    //     try {
    //         const response = await axios.post(               // to pegando o caminho da onde eu vou validar meu token
    //             'http://127.0.0.1:8000/api/token/', {

    //             username: username,                          // to passando o user para o campo do caminho (username)
    //             password: password                           // to passando a senha para o campo do caminho (password)
    //         });

    //         const {access, refresh} = response.data          // to pegando os tokens gerados pelo servidor

    //         localStorage.setItem('accessToken', access);     // to armazenando o token de acesso aqui
    //         localStorage.setItem('refreshToken', refresh);   // to armazenando o refresh do token aqui

    //         console.log("Successful.");
    //         navigation.navigate('Home');                     // se o try acontecer, então o user e senha foram validados e navega pra minha home
    //         return access;
            
    //     } catch {
    //         console.error(Error);                            // se o meu try não acontecer, então vai rodar um erro no meu console.log
    //     }
    // }; Deu certo, mas não foi da maneira que o professor queria, então eu vou esperar ele fazer para fazer igual

    const handleLogin = async () => {
        try {
            const response = await axios.post(
                'http://127.0.0.1:8000/api/token/', {
                    
                    username: username,
                    password: password 
                }
            )
            console.log(response.data.access);
            setToken(response.data.access);
            navigation.navigate('Home');
        }
        catch(error){
            console.error(error);
        }
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.users}>
                <Text style={styles.text}>USER: </Text>
                <TextInput
                    style={styles.input}
                    value={username}
                    onChangeText={(e)=>setUser(e)}
                    placeholder="User"
                />

                <Text style={styles.text}>PASSWORD: </Text>
                <TextInput
                    style={styles.input}
                    value={password}
                    onChangeText={(e)=>setPassword(e)}
                    secureTextEntry={true}
                    placeholder="Password"
                />

                <View style={styles.boxEnter}>
                    <Pressable style={styles.btn} onPress={handleLogin}>
                        <Text style={{fontWeight:'bold', color: "#fff"}}>ENTER</Text>
                    </Pressable>

                    <Pressable style={styles.btn}>
                        <Text style={{fontWeight:'bold', color: "#fff"}}>REGISTER</Text>
                    </Pressable>
                    <Text></Text>
                </View>
            </View>
        </View>
    )
}