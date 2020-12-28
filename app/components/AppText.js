import React from 'react';
import { Text, StyleSheet, Platform } from "react-native";


const AppText = ({children}) => {
  return(
    <Text style={s.text}>{children}</Text>
  );
}

const s = StyleSheet.create({
  text: {
    color: 'tomato',
    ...Platform.select({
      ios: {
        fontSize: 20,
        fontFamily: 'Avenir'
      },
      android: {
        fontSize: 18,
        fontFamily: 'Roboto'
      }
    })
  }
});

export default AppText;
