import React from "react";
import {
  StatusBar,
  SafeAreaView,
  Platform,
  StyleSheet,
  View,
} from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info.card.component";

export const RestaurantsScreen = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.search}>
      <Searchbar />
    </View>
    <View style={styles.list}>
      <RestaurantInfoCard />
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  search: {
    padding: 16,
    backgroundColor: "white",
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: "blue",
  },
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
