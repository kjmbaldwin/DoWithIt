import React from 'react';
import { Image, View, StyleSheet } from "react-native";


const ViewImageScreen = (image) => {
  return(
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <View style={styles.closeButton}/>
        <View style={styles.deleteButton}/>
      </View>
      <View style={styles.productContainer}>
        <Image
          style={styles.product}
          source={require('../assets/chair.jpg')}
          resizeMode={'contain'}
        />
      </View>
    </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  productContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  product: {
    width: '100%',
    height: '100%'
  },
  closeButton: {
    height: 50,
    width: 50,
    left: 30,
    backgroundColor: '#fc5c65'
  },
  deleteButton: {
    height: 50,
    width: 50,
    right: 30,
    backgroundColor: '#4ECDC4'
  }
});

export default ViewImageScreen
