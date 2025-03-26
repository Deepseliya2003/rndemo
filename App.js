import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screens/Login/Login';
import Home from './src/screens/Home/Home';
import TabNavigator from './src/screens/TabNavigator';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

const App =  () => {
  const Stack = createNativeStackNavigator();;
  return (
    <Provider store={store}>
  <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name='Login' component={Login}/>
      <Stack.Screen name='Home' component={TabNavigator}/>
    </Stack.Navigator>
  </NavigationContainer>
  </Provider>
  )
}

export default App;