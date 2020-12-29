import React from 'react';
import { Image, StyleSheet, View } from "react-native";

import colors from "../config/colors";
import AppText from "./AppText";

const Card = ({title, subtitle, image}) => {
  return(
    <View style={s.card}>
      <Image style={s.image} source={image} />
      <View style={s.detailsContainer}>
        <AppText style={s.title}>{title}</AppText>
        <AppText style={s.subtitle}>{subtitle}</AppText>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: 'hidden',
  },
  detailsContainer: {
    padding: 20
  },
  image: {
    width: '100%',
    height: 200
  },
  subtitle: {
    color: colors.secondary,
    fontWeight: 'bold',
  },
  title: {
    marginBottom: 7
  }
})

export default Card;
