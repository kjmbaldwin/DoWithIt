import React from 'react';
import { View } from 'react-native';
import { WelcomeScreen }  from './app/screens';

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: "column",
      }}
    >
      <WelcomeScreen/>
    </View>
  );
}
