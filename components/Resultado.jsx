import React, {Component} from "react";
import {View, Text, Button,StyleSheet} from 'react-native';


export class Resultado extends Component{
    render(){
      let imc  = this.props.route.params.peso / (this.props.route.params.altura ^2)  
      let result = '';

    if (this.props.imc < 17 && this.props.imc > 0){
        result = "Muito abaixo do peso";
    }else if (this.props.imc>17 && this.props.imc < 18.49){
        result="Baixo do peso";
    }else if(this.props.imc>18.50 && this.props.imc <24.99){
        result="Peso normal";
    }else if(imc>25 && imc <29.99 ){
        result="Acima do peso";
    }else if(imc>30 && imc <34.99){
        result ="Obesidade nivel 1"; 
    }else if(imc> 35 && imc <39.99){
        result ="Obesidade nivel 2";
    }else if(imc > 40){
        result ="Obesidade nivel 3";
    }
      return(
            <View style={estilo.container}>
                <Text style = {estilo.texto}>Resultado</Text>
                
                <Text> Seu IMC é: {imc} </Text>
                <Text> Situação: {result}</Text>
 
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


      export default Resultado