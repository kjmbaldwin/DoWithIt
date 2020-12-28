import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../config/colors";


const AppButton = ({ title, onPress }) => {
  return(
    <TouchableOpacity style={s.button} onPress={onPress}>
      <Text style={s.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const s = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    width: '100%',
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  }
})

export default AppButton;