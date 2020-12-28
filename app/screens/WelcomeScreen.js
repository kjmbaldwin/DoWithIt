import React, { Component } from 'react';
import { ImageBackground, View, StyleSheet, Image } from 'react-native';

const bgImage = require('../assets/background.jpg')

export class WelcomeScreen extends Component {
  render() {
    return(
      <View style={styles.container}>
        <ImageBackground
          style={styles.bg}
          source={bgImage}/>
        <Image
          style={styles.image}
          source={require('../assets/logo-red.png')}>
        </Image>
        <View style={styles.button1}/>
        <View style={styles.button2}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  bg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  image: {
    width: 100,
  },
  button1: {
    height: 80,
    backgroundColor: '#fc5c65'
  },
  button2: {
    height: 80,
    backgroundColor: '#4ECDC4'
  }
});
