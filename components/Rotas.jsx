import Cadastro from './Cadastro';
import Home from "./Home";
import Imc from "./Imc";
import Perfil from "./Perfil";
import Resultado from "./Resultado";
import Sobre from "./Sobre";
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'


const Pilha = createStackNavigator();
const rotaGeral = createStackNavigator();


  function Routes(){
    return(
        
            <Pilha.Navigator initialRouteName="Home">
            <Pilha.Screen name = 'Home' component = {Home}/>
            <Pilha.Screen name = 'Cadastro' component = {Cadastro}/>
            <Pilha.Screen name = 'Imc' component = {Imc}/>
            <Pilha.Screen name = 'Sobre' component = {Sobre}/>
            <Pilha.Screen name = 'Resultado' component = {Resultado}/>
            </Pilha.Navigator>
    

    
    )
}

 function rotasGerais(){
    return(
        <NavigationContainer>
        <rotaGeral.Navigator>
            <rotaGeral.Screen name='Principal' component={Routes} options={{ headerShown: false }}>
            </rotaGeral.Screen>
            <rotaGeral.Screen name='Perfil' component={Perfil} options={{ headerShown: false }}>
            </rotaGeral.Screen>
        </rotaGeral.Navigator>
    </NavigationContainer>
)
}

 export default rotasGerais