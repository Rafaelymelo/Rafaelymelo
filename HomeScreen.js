import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela Inicial</Text>

      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("BMI")}>
        <Text style={styles.cardTitle}>Calculadora de IMC</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("Todo")}>
        <Text style={styles.cardTitle}>Lista de Tarefas</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("Account")}>
        <Text style={styles.cardTitle}>Minha Conta</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 28, marginBottom: 30, textAlign: 'center' },
  card: {
    padding: 20,
    backgroundColor: '#eee',
    marginBottom: 20,
    borderRadius: 10
  },
  cardTitle: { fontSize: 18 }
});
