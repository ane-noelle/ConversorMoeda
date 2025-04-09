import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [dolar, setDolar] = useState(null);
  const [euro, setEuro] = useState(null);
  const [message, setMessage] = useState('Preencha o campo acima.');

  function euroConversor() {
    setEuro((dolar * 0.9).toFixed(2));
  }

  function calcular() {
    if (euro != NaN) {
      if (dolar > 9999) {
        setMessage('Digite um número menor.')
        setEuro(null)
      } else {
        euroConversor();
        setMessage('Seu valor é:');
      }

    } else {
      setMessage('Por favor, insira um número válido.');
      setEuro(null);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleArea}>
        <Text style={styles.title}>Conversor de Moedas</Text>
        <Text style={styles.subtitle}>Dólar para Euro</Text>
      </View>

      <View style={styles.userArea}>
        <TextInput
          style={styles.input}
          placeholder='Exemplo: 40.80'
          onChangeText={setDolar}
          keyboardType='numeric'
          value={dolar}
        />
        <TouchableOpacity style={styles.button} onPress={calcular}>
          <Text style={styles.buttonText}>Calcular</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.outputArea}>
        <Text style={styles.message}>{message}</Text>
        <Text style={styles.euroOutput}>€{euro}</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titleArea: {
    backgroundColor: '#e887d3',
    borderWidth: 2,
    borderColor: '#863ca3',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '20%',
  },
  title: {
    fontSize: 25,
    fontWeight: '800',
    color: '#f5b8ed',
  },
  subtitle: {
    marginTop: 15,
    color: '#6b0d5f',
    fontSize: 16,
  },
  userArea: {
    marginTop: 30,
    alignItems: 'center',
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#e00dc4',
    borderRadius: 5,
    fontSize: 18,
    marginVertical: 30,
  },
  button: {
    backgroundColor: '#e09bd7',
    borderRadius: 5,
    padding: 10,
    borderColor: '#e312c7',
    borderWidth: 1
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  outputArea: {
    marginTop: 40,
    alignItems: 'center',
  },
  message: {
    fontSize: 18,
    marginBottom: 10,
  },
  euroOutput: {
    fontSize: 80,
    fontWeight: 'bold',
    color: '#6b0d5f',
  },
});
