import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen({ navigation }) {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState('');

  const login = async () => {
    const data = await AsyncStorage.getItem('user');
    if (!data) return setError('Nenhuma conta criada.');

    const account = JSON.parse(data);

    if (account.username === user && account.password === pass) {
      navigation.navigate('Home');
    } else {
      setError('Usuário ou senha incorretos');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        placeholder="Usuário"
        style={styles.input}
        onChangeText={setUser}
      />

      <TextInput
        placeholder="Senha"
        secureTextEntry
        style={styles.input}
        onChangeText={setPass}
      />

      {error ? <Text style={styles.error}>{error}</Text> : null }

      <TouchableOpacity style={styles.btn} onPress={login}>
        <Text style={styles.btnText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.link}>Criar Conta</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 32, marginBottom: 20 },
  input: { width: '80%', padding: 10, borderWidth: 1, marginBottom: 15 },
  btn: { backgroundColor: '#0066ff', padding: 15, width: '80%', alignItems: 'center' },
  btnText: { color: '#fff' },
  link: { marginTop: 15, color: 'blue' },
  error: { color: 'red' }
});
