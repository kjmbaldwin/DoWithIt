import React from 'react';
import { Image, StyleSheet, View } from "react-native";

import colors from "../config/colors";
import AppText from "../components/AppText";
import ListItem from "../components/ListItem";

const ListingDetailsScreen = (props) => {
  return(
    <View>
      <Image style={s.image} source={require('../assets/jacket.jpg')} />
      <View style={s.detailsContainer}>
        <AppText style={s.title} title={''}>Red Jacket for sale</AppText>
        <AppText style={s.price} title={''}>$100</AppText>
        <View style={s.userContainer}>
          <ListItem
            image={require('../assets/mosh.jpg')}
            title={'Kyle Baldwin'}
            subtitle={'5 listings'}
          />
        </View>
      </View>
    </View>
  )
}

const s = StyleSheet.create({
  image: {
    width: '100%',
    height: 300
  },
  detailsContainer: {
    padding: 20
  },
  price: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10
  },
  title: {
    fontSize: 24,
    fontWeight: 500
  },
  userContainer: {
    marginVertical: 40
  }
});

export default ListingDetailsScreen;
