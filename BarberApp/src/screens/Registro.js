import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet,  Image, KeyboardAvoidingView, Pressable } from 'react-native';
import Logo from '../../assets/Logo2.png'


import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../services/firebaseConfig';

const RegisterScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    createUserWithEmailAndPassword(auth, username, password)
    // criacao de usuario em credencial
    .then((userCredential) => {

        const user = userCredential.user;
        // retorna o ID automático do firebase
        const uid = userCredential.user.id
        alert('Conta criada com sucesso!')
        navigation.navigate('Login');

    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        // tratando o erro de e-mail que já está em uso
        if (errorCode === 'auth/email-already-in-use'){
            alert('O e-mail fornecido já está em uso em outra conta.')
        }
        if (errorCode === 'auth/weak-password'){
            alert('A senha deve ter pelo menos 6 digitos alfanumericos.')
        }
        console.log(errorMessage) // visualizacao de erros
    });
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior='padding'>
      <View style={styles.form}>
            <View style={{
                position:'relative',
                top:-50,
                width:'100%',
                display:'flex',
                alignItems:'center',
                gap:18,
                justifyContent:'center'}}>

                <Image
                  source={Logo}
                  style={{
                    width:80,
                    height: 70}}>
                </Image>
                <Text style={{
                  fontSize:25,
                  fontWeight:'bold'
                }}>Barber app</Text>
                  <Text style={{
                  fontSize:12,
                  fontWeight:'400',
                  textAlign:'center'
                }}>Transforme seu visual com estilo e confiança, nossa barbearia oferece uma experiência única.</Text>
            </View>
        <TextInput
          style={styles.input}
          placeholder="Usuário"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        
        <Button 
          color='#b5691f' 
          title="Registrar" 
          onPress={handleRegister} 
        />

        <Pressable 
            style={styles.button}
            onPress={() => navigation.navigate('Login')}>
            <Text style={styles.buttonText}>Fazer Login</Text>
        </Pressable>
        
      </View>
  </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"white"
  },
  image: {
    position: 'absolute',
    width: '100%',
    height: 300,
    top: 0,
  },

  form: {
    marginTop: 60, // Ensure this is below the image height
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#cfcdcc',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
    borderRadius:10
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    backgroundColor: 'white',
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },

});


export default RegisterScreen;
