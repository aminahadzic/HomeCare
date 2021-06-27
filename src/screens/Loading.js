//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";

// create a component
const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "rgba(255,232,232,.7)",
  },
});

//make this component available to the app
export default Loading;
