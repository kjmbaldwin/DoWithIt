import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Image, StyleSheet, Text, SafeAreaView, TouchableWithoutFeedback} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello React Native!</Text>
      <Image source={require('./assets/icon.png')} />
      <TouchableWithoutFeedback>
        <Image source={{
          width: 200,
          height: 300,
          uri: 'https://picsum.photos/200/300'}} />
      </TouchableWithoutFeedback>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
