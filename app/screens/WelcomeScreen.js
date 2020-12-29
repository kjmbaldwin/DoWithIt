import React from 'react';
import { ImageBackground, View, StyleSheet, Image, Text } from 'react-native';

import colors from '../config/colors'
import AppButton from "../components/AppButton";

const bgImage = require('../assets/background.jpg')

const WelcomeScreen = () => {
  return(
    <ImageBackground
      style={styles.bg}
      source={bgImage}
      blurRadius={5}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/logo-red.png')}/>
        <Text style={styles.tagline}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton title={'Login'} />
        <AppButton title={'Sign Up'} color={'secondary'} />
      </View>
    </ImageBackground>
);
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: 'center'
  },
  buttonsContainer: {
    width: '100%',
    padding: 20,
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
  tagline: {
    fontSize: 25,
    fontWeight: 600,
    paddingVertical: 20
  }
});

export default WelcomeScreen;
