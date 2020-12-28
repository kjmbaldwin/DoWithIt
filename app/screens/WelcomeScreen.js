import React from 'react';
import { ImageBackground, View, StyleSheet, Image, Text } from 'react-native';

import colors from '../config/colors'

const bgImage = require('../assets/background.jpg')

const WelcomeScreen = () => {
  return(
    <ImageBackground
      style={styles.bg}
      source={bgImage}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/logo-red.png')}/>
        <Text>Sell What You Don't Need</Text>
      </View>
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
);
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: 'center'
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center'
  },
  logo: {
    width: 100,
    height: 100,
  },
  loginButton: {
    width: '100%',
    height: 70,
    backgroundColor: colors.primary
  },
  registerButton: {
    width: '100%',
    height: 70,
    backgroundColor: colors.secondary
  }
});

export default WelcomeScreen;
