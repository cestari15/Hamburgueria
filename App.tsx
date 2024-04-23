
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import Cardapio from './src/Cardapio';
import LoginScreen from './src/LoginScreen';
import Carrinho from './src/Carrinho';
import CadastroProduto from './src/screens/CadastroProduto';
import CadastroCliente from './src/screens/CadastroCliente';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

function App(): React.ReactElement {

  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Cardapio' component={Cardapio} 
        options={{headerShown:false}} />
        <Stack.Screen name='Login' component={LoginScreen} 
        options={{headerShown:false}} />
        <Stack.Screen name='Carrinho' component={Carrinho} 
        options={{headerShown:false}} />
        <Stack.Screen name='CadastroProduto' component={CadastroProduto} 
        options={{headerShown:false}} />
        <Stack.Screen name='CadastroCliente' component={CadastroCliente} 
        options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;