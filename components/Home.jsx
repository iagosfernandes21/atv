import React, { Component } from 'react'
import { View, Button } from 'react-native'


export class Home extends Component{
render(){
    return(
        <View>
        <Button title="Cadastro" onPress = {()=>{this.props.navigation.navigate('Cadastro')}}></Button>
        <Button title="IMC" onPress = {()=>{this.props.navigation.navigate('Imc')}}></Button>
        <Button title="Sobre" onPress = {()=>{this.props.navigation.navigate('Sobre')}}></Button>
        </View>
        )
        
    
}

}

export default Home