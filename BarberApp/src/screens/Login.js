import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground, Image } from 'react-native';
import img1 from '../../assets/img1.jpg'
import Logo from '../../assets/Logo2.png'
import { LinearGradient } from 'expo-linear-gradient';
const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'user' && password === 'pass') {
      navigation.navigate('Main');
    } else {
      alert('Credenciais inválidas');
    }
  };

  return (
    <View style={styles.container}>
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
                }}
              ></Image>
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
      <Button color='#b5691f' title="Entrar" onPress={handleLogin} />
    </View>
  </View>
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
    marginTop: 300, // Ensure this is below the image height
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
});


export default LoginScreen;
