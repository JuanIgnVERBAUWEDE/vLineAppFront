import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';

export default function Login() {
    const [Email, setEmail] = useState("")
    const [Contrasena, setContrasena] = useState("")

    function HandleRegister() {
      
    }
    function HandleLogin() {

    }

  return (
    <View style={styles.container}>
      <TextInput placeholder="Email" value={Email} onChangeText={setEmail} style={styles.input} />
      <TextInput placeholder="Contraseña" secureTextEntry={true} value={Contrasena} onChangeText={setContrasena} style={styles.input} />
      <Pressable onPressOut={HandleLogin}>
        <Text>Logueate!</Text>
      </Pressable>
      <Pressable onPressOut={HandleRegister}>
        <Text>No tenes cuenta? Registrate!</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 200,
    padding: 10,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'lightgray'
  },
  button: {
    width: 300,
  }
});

