import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground, Image, KeyboardAvoidingView,Pressable } from 'react-native';
import img1 from '../../assets/img1.jpg'
import Logo from '../../assets/Logo2.png'
import { LinearGradient } from 'expo-linear-gradient';

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../services/firebaseConfig';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
  signInWithEmailAndPassword(auth, username, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user)
            navigation.navigate('Main');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
        });
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior='height'>
        
      <ImageBackground
        source={img1}
        style={styles.image}
        imageStyle={styles.imageStyle}
      >
        <LinearGradient
          colors={['transparent', 'white']}
          style={styles.gradient}
        />
      
      </ImageBackground>
      <View style={styles.form}>
          <View style={{
            position:'relative',
            top:-50,
            width:'100%',
            display:'flex',
            alignItems:'center',
            gap:18,
            justifyContent:'center'
            }}>
              <Image
                  source={Logo}
                  style={{
                    width:80,
                    height: 70
                }}>
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
          keyboardType="email-address"
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
          title="Entrar" 
          onPress={handleLogin} 
        />
        <Pressable 
          style={styles.buttonRegister}
          onPress={() => navigation.navigate('Register')}>

          <Text style={styles.buttonText}>Registrar-se</Text>
        </Pressable>

      </View>
  </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"white",
  },
  image: {
    position: 'absolute',
    width: '100%',
    height: 300,
    top: 0,
  },
  imageStyle: {
    resizeMode: 'cover',
  },
  gradient: {
    flex: 1,
    height: '100%',
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
  form: {
    marginTop: '75%', // Ensure this is below the image height
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
  buttonRegister: {
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


export default LoginScreen;
