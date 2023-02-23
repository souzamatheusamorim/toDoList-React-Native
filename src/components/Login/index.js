import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, SafeAreaView, TouchableOpacity } from 'react-native';

import firebase from '../../services/firebaseConnection';

export default function Login({ changeStatus }) {
    const [type, setType] = useState('login');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin(){
       
        if(type === 'login'){
            const user = firebase.auth().signInWithEmailAndPassword(email, password)
            .then((user) => {
                changeStatus(user.user.uid)
            })
            .catch((err) => {
                console.log(err);
                alert('Erro ao logar');
                return;
            })
        }else{
            const user = firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((user) =>{
                changeStatus(user.user.uid)
            })
            .catch((err) => {
                console.log(err);
                alert(err);
                return;
            })
        }

    }

    return(
        <SafeAreaView style={styles.container}>
            
        <TextInput 
            placeholder='Seu email'
            style={styles.input}
            value={email}
            onChangeText={ (text) => setEmail(text)}
         />

        <TextInput 
            placeholder='********'
            style={styles.input}
            value={password}
            onChangeText={ (text) => setPassword(text)}
         />

        <TouchableOpacity 
        style={[styles.handleLogin, { backgroundColor: type === 'login' ? '#3ea6f2' : '#3ea'}]}
        onPress={handleLogin}
        >
         <Text style={styles.loginText}>
            { type === 'login' ? 'Acessar' : 'Cadastrar'}
            </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={ () => setType(type => type === 'login' ? 'cadastrar' : 'login')} >
         <Text style={{ textAlign: 'center'}}>
         { type === 'login' ? 'Criar uma conta' : 'Já possui uma conta? Acessar!'}
            </Text>
        </TouchableOpacity>


        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingTop: 40,
        backgroundColor: '#F2f6fc',
        paddingHorizontal: 10,
     
    },
    input:{
        marginBottom: 10,
        backgroundColor: '#FFF',
        borderRadius: 4,
        height: 45,
        padding: 10,
        borderWidth: 1,
        borderColor: '#4b5679',
        
    },
    handleLogin:{
        alignItems: 'center',
        justifyContent: 'center',
        
        height: 45,
        marginBottom: 10,
    },
    loginText:{
        color: '#FFF',
        fontSize: 17,
    }
})