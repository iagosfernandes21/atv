import React, {Component} from "react";
import {View, Text, Button,StyleSheet } from 'react-native';


export  class Sobre extends Component {
    render(){
        return(
            <View style={estilo.container}>
                <Text style = {estilo.texto}> Olá, Seja Bem-Vindo</Text>
                <Text style = {estilo.texto}> Este é um Trabalho de PIMD</Text>

                <Button title="Home" onPress = {()=>{this.props.navigation.navigate('Home')}}></Button>

            </View>
        )
        
    
}
}

const estilo = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    texto:{
      fontSize:24,
      fontWeight:'bold',
      fontFamily: 'Arial'
    }
      })


export default Sobre;