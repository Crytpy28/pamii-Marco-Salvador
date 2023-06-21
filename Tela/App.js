import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {  StyleSheet, View, ImageBackground } from 'react-native';
import {Button,Input,Text,SafeAreaView } from 'react-native-elements';
import { BackgroundImage } from 'react-native-elements/dist/config';
import  Icon  from 'react-native-vector-icons/FontAwesome';

import backgroundImage from "./Fundo.jpg";
export default function App() {

  const [email, setEmail] = useState(null)
  const [password,setPassword] = useState(null)

  const entrar = () => {
    console.log("entrou")
  }
  return (
    <ImageBackground source={backgroundImage}style={styles.backgroundImage}>
       
    <View style={styles.container}>
    <View style ={styles.square}/>
     <View style ={styles.content}>
      
      <Text h3 style = {styles.titulo} >
        Recomeço</Text>
      <Input 
      placeholder="e-mail"
      leftIcon={{ type: 'font-awesome',name: 'envelope'}}
      style={styles}
      onChangeText ={value=> setEmail (value)}
        keyboardType="email-address"/>

<Input 
      placeholder="Senha"
      leftIcon={{ type: 'font-awesome',name: 'lock'}}
      style={styles}
      onChangeText ={value=> setPassword (value)}
      secureTextEntry={true}
        />
        <Button
        icon={
        <Icon
        name ="arrow-right"
        size={15}
        color="white"
          />
        }
        title ="Entrar"
        onPress={() => entrar()}
        />
        
    </View></View></ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage:{
    flex: 1,
    resizeMode:1
  },
  titulo: {
    color:"black"
  },
  square: { 
    
    position:'absolute',
    width: 400, 
    height: 500, 
    borderRadius: 10,
    backgroundColor: 'rgba(255,255,255,0.7)', 

  },
  content:{
    alignItems: 'center',
    justifyContent: 'center',
  }
  
});