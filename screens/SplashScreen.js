import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function SplashScreen() {
  return (
    <LinearGradient colors={['#1e3c72', '#2a5298']} style={styles.container}>
      <Image
        source={{ uri: 'https://img.icons8.com/emoji/96/game-die.png' }}
        style={styles.logo}
      />
      <Text style={styles.title}>Welcome to</Text>
      <Text style={styles.brand}>Guess The Number</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    color: '#fff',
    marginBottom: 8,
    fontStyle: 'italic',
  },
  brand: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ffea00',
  },
});
