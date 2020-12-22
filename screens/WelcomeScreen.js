import React, { Component } from 'react';
import { ImageBackground, View, StyleSheet } from 'react-native';

const bgImage = require('../assets/background.jpg')

export class WelcomeScreen extends Component {
  render() {
    return(
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={bgImage}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  }
});