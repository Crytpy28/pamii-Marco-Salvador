import React, { useState, useContext, useEffect } from 'react';
import {Image, ImageBackground, View } from 'react-native';
import {Container,InputArea,CustomButton,CustombuttonText, SignMessageButton, SignmessageButtonText,SignmessageButtonTextBold } from './styles';
import SignInput from './components/SignInput';
import {Box,Text, FormControl, Input,  Button, Divider, NativeBaseProvider, extendTheme, Stack } from 'native-base';
import { withTheme } from 'styled-components';

//import Logo from '../../assets/camaleao.png';
//import IconEmail from '../../assets/cadeado.png';
//import IconSenha from '../../assets/cadeado.png';




export default () => {
   
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    const handleMessageButtonClick = () =>{
        
    }
    const handleSignClick = () =>{

        
    }
    const newColorTheme = {
      brand: {
        900: '#5B8DF6',
        800: '#ffffff',
        700: '#cccccc',
      },
    };
  
  const theme = extendTheme({
    colors: newColorTheme,
    
  });
  


    return (
        
<NativeBaseProvider theme={theme}>
        <Container>
          
             <ImageBackground
                style={{height:'100%', width:'100%'}}
                source={require('./Fundo.jpg')}
            >
            <View style={{alignItems:'center', height:150, width:'100%', marginTop:150, justifyContent:'center'}} >
            
                    <Text style={{marginTop:30, fontSize:15, color:'white'}} >RECOMEÇO</Text>  
            </View>
   
            <Text marginTop={90} marginLeft={29} color='muted.50'>Email</Text>
            <Input variant="outline"  mx="3" placeholder="Insira seu email" w="70%" marginTop={1} marginLeft={'15%'} />
            <Text  marginLeft={29} color='muted.50'>Senha</Text>
            <Input variant="outline" mx="3"  placeholder="Insira sua Senha" w="70%" marginTop={1} marginLeft={'15%'} />
           
            <Button size="lg" marginTop={3} color="muted.50" variant="outline" width={'20%'} marginLeft={'40%'} >
            Entrar
          </Button>
          <Stack mb="2.5" mt="1.5" direction={{
        base: "column",
        md: "row"
      }} space={2} mx={{
        base: "auto",
        md: "0"
      }}>
          <Button size="m" fontSize={18} color='muted.50' variant="link">
             Cadastrar-se
          </Button>
     
        </Stack>
      
        </ImageBackground>
        </Container>
      
        </NativeBaseProvider>
    );

};