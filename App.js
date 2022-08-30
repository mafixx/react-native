import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Modal } from './components/Modal';
import { PrimeiroComponente } from './components/PrimeiroComponente';
import { SegundoComponente } from './components/SegundoComponente';

export default function App() {

  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Modal visible={isModalVisible}>
        <Text>Esse é um modal</Text>
      </Modal>  
      <Text>Esse é meu primeiro app em react native!</Text>
      <PrimeiroComponente/>
      <SegundoComponente/>
      <Button title="Mostrar modal" onPress={() => setIsModalVisible(true)} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    width: "100%"
  },
});
