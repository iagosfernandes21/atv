import React, {Component} from "react";
import {View, Text, Button, StyleSheet, TextInput,TouchableOpacity} from 'react-native';

export class Cadastro extends Component{
    constructor(props){
      super(props);
      this.state ={
        nome:"",
        idade:"",
        email:""
      }
    }  
  
  render(){
      return(
            <View style={estilo.container}>
                <Text style = {estilo.texto}> Pagina Inicial </Text>

      <TextInput style={estilo.TextInput} placeholder="Nome" onChangeText={(nome) =>{this.setState({nome:nome})}}></TextInput>
      <TextInput style={estilo.TextInput} placeholder="Idade" onChangeText={(idade) =>{this.setState({idade:idade})}}></TextInput>
      <TextInput style={estilo.TextInput} placeholder="Email" onChangeText={(email) =>{this.setState({email:email})}}></TextInput>
      <Button title="Cadastrar" onPress = {()=> this.props.navigation.navigate('Perfil',{nome:this.state.nome,  idade: this.state.idade, email:this.state.email})}></Button>
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


 export default Cadastro
