import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default function Ola() {
  return (
    <View style={styles.container}>
      <Text style={styles.textoParagrafo}>Criando outra página para o app</Text>
      <Text>Outro parágrafo</Text>
      <Button title="Click" onPress={() => Alert.alert("Cringe zap zap 2 amogus edition poggers")}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoParagrafo: {
    fontSize: 30,
    color: 'white',
    textAlign: 'right'
  },
});
