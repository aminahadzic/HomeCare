//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

// create a component
const Logo = () => {
  return (
    <View>
      <Image
        source={{
          uri: "https://w1.pngwing.com/pngs/956/728/png-transparent-heart-logo-health-health-care-medicine-homeopathy-therapy-hospital-clinic.png",
        }}
        style={{ height: 150, width: 150 }}
      />
    </View>
  );
};

// define your styles

//make this component available to the app
export default Logo;
