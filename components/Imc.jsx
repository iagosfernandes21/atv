import React, {Component} from "react";
import {View, Text, Button,StyleSheet, TextInput} from 'react-native';

 
 export class Imc extends Component{
  constructor (props){  
    super(props)
    this.state = {
        peso:0,
        altura:0,
    }
}    
    render(){
            return(
                <View style={estilo.container}>
                    <Text style = {estilo.texto}> Calcule Seu Imc </Text>
    
            <TextInput placeholder="Qual seu Peso em Kg"
            onChangeText = {(peso) => this.setState({peso:peso})}>
            </TextInput>
            
            <TextInput placeholder= "Qual Altura em cm" 
            onChangeText={(altura) => this.setState({altura:altura})}>
            </TextInput>
                   
                   
           <Button title="Calcular" onPress = {()=>{this.props.navigation.navigate('Resultado',{altura:this.state.altura, peso:this.state.peso})}}></Button>
                    
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

 export default Imc