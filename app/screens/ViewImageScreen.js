import React from 'react';
import { Image, View, StyleSheet } from "react-native";

import colors from '../config/colors';


const ViewImageScreen = (image) => {
  return(
    <View style={styles.container}>
      <View style={styles.closeButton}/>
      <View style={styles.deleteButton}/>
      <Image
        style={styles.product}
        source={require('../assets/chair.jpg')}
        resizeMode={'contain'}
      />
    </View>
);
}

const styles = StyleSheet.create({
  closeButton: {
    height: 50,
    width: 50,
    position: 'absolute',
    top: 40,
    left: 30,
    backgroundColor: colors.primary
  },
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  deleteButton: {
    height: 50,
    width: 50,
    position: 'absolute',
    top: 40,
    right: 30,
    backgroundColor: colors.secondary
  },
  product: {
    width: '100%',
    height: '100%'
  },
});

export default ViewImageScreen
