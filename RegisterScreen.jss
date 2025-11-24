import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function RegisterScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [email, setEmail]     = useState('');
  const [password, setPassword] = useState('');

  const register = async () => {
    await AsyncStorage.setItem(
      'user',
      JSON.stringify({ username, email, password })
    );

    alert('Conta criada com sucesso!');
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar Conta</Text>

      <TextInput placeholder="Usuário" style={styles.input} onChangeText={setUsername}/>
      <TextInput placeholder="Email" style={styles.input} onChangeText={setEmail}/>
      <TextInput placeholder="Senha" secureTextEntry style={styles.input} onChangeText={setPassword}/>

      <TouchableOpacity style={styles.btn} onPress={register}>
        <Text style={styles.btnText}>Criar Conta</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 32, marginBottom: 20 },
  input: { width: '80%', padding: 10, borderWidth: 1, marginBottom: 15 },
  btn: { backgroundColor: '#28a745', padding: 15, width: '80%', alignItems: 'center' },
  btnText: { color: '#fff' },
});
