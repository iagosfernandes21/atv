import React, {Component} from "react";
import {View, Text, Button, StyleSheet, Image} from 'react-native';

 
 export class Perfil extends Component{
    render(){
        return(
            <View style={estilo.container}>
                <Text style = {estilo.texto}> Perfil </Text>
                <Image style={{height:150, width:150, margin: 10}} source={{uri:"https://cn.i.cdn.ti-platform.com/content/792/hermano-de-jorel/showpage/ar/jorel.f7a80b37.png"}}/>
                <Text>
                  Nome: {this.props.route.params.nome}
                </Text>
                <Text>
                  Idade: {this.props.route.params.idade}
                </Text>
                <Text>
                  Email: {this.props.route.params.email}
                </Text>
                
                <Button title="Home" onPress = {()=>{this.props.navigation.navigate('Home')}}></Button>

            </View>
        )
        
    
}
}

export default Perfil

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


      