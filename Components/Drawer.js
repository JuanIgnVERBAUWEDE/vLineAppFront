import * as React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from '../Screens/Login';
import PriorityForm from '../Screens/PriorityForm';

function LoginScreen() {
  return (
      <Login/>
  )
}

function RegisterScreen() {
  return (
    <registerForm/>
  )
}

function PriorityFormScreen() {
    return (
        <PriorityForm/>
    )
  }

const Drawer = createDrawerNavigator();

function MenuDrawer() {
  return (
      <NavigationContainer>
        <Drawer.Navigator>
            <Drawer.Screen name="Formulario Prioridad" component={PriorityFormScreen} />
            <Drawer.Screen name="Formulario Registro" component={RegisterScreen} />
            <Drawer.Screen name="Login" component={LoginScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
  );
}

export default MenuDrawer;