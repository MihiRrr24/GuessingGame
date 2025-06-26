import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Alert,
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  Pressable,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function GameScreen() {
  const [target, setTarget] = useState(generateRandomNumber());
  const [guess, setGuess] = useState('');
  const [feedback, setFeedback] = useState('');

  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  const handleGuess = () => {
    const number = parseInt(guess);

    if (isNaN(number)) {
      Alert.alert('❌ Invalid Input', 'Please enter a number!');
      return;
    }
    if (number <= 0) {
      Alert.alert('⚠️ Invalid Input', 'Enter a positive number!');
      return;
    }

    Keyboard.dismiss();

    if (number < target) {
      setFeedback('📉 Too Low! Try Higher.');
    } else if (number > target) {
      setFeedback('📈 Too High! Try Lower.');
    } else {
      Alert.alert('🎉 Correct!', 'You guessed it!', [
        {
          text: 'Play Again',
          onPress: () => {
            setTarget(generateRandomNumber());
            setFeedback('');
            setGuess('');
          },
        },
      ]);
    }

    setGuess('');
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <LinearGradient colors={['#c6ffdd', '#fbd786', '#f7797d']} style={styles.container}>
        <Text style={styles.heading}>Guess a number between 1 and 100</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your guess"
          keyboardType="number-pad"
          value={guess}
          onChangeText={setGuess}
        />

        <Pressable
          onPress={handleGuess}
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed,
          ]}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </Pressable>

        {feedback !== '' && <Text style={styles.feedback}>{feedback}</Text>}
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    width: '80%',
    padding: 14,
    borderRadius: 12,
    backgroundColor: '#fff',
    fontSize: 18,
    textAlign: 'center',
    elevation: 3,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4caf50',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    elevation: 4,
  },
  buttonPressed: {
    backgroundColor: '#388e3c',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  feedback: {
    fontSize: 20,
    marginTop: 30,
    color: '#0d47a1',
    fontWeight: '600',
    textAlign: 'center',
  },
});
