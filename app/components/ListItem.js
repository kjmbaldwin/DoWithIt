import React from 'react';
import { Image, StyleSheet, View } from "react-native";

import AppText from "./AppText";
import colors from "../config/colors";

const ListItem = ({title, subtitle, image}) => {
  return(
    <View style={s.container}>
      <Image style={s.image} source={image} />
      <View>
        <AppText style={s.title}>{title}</AppText>
        <AppText style={s.subtitle}>{subtitle}</AppText>
      </View>
    </View>
  )
}

const s = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10
  },
  subtitle: {
    color: colors.medium
  },
  title: {
    fontWeight: 500,
  }
});

export default ListItem;
