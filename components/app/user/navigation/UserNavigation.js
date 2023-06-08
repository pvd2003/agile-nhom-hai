import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Boarding from '../screens/Boarding';
import Login from '../screens/Login'
import Register from '../screens/Register';

const Stack = createNativeStackNavigator();

const UserNavigation = () => {
  return (
    <Stack.Navigator  screenOptions={{ headerShown: false }}>
        <Stack.Screen name = "Boarding" component={Boarding}/>
        <Stack.Screen name = "Login" component={Login}/>
        <Stack.Screen name = "Register" component={Register}/>
    </Stack.Navigator>
  )
}

export default UserNavigation