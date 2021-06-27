import { CardStyleInterpolators } from "@react-navigation/stack";
import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity, SafeAreaView, Image } from "react-native";
import FlatButton from "../assets/button";
import Communications from "react-native-communications";
import {
  phonecall,
  email,
  text,
  web
} from 'react-native-communications';

//use this as the screen for the buttons for emergency and sending sms messages

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo.png')} />
        <Text style={styles.appTitle}>
          WELCOME TO HOMECARE
        </Text>
        {/* Call: phonecall(phoneNumber, prompt) */}
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.button}
          onPress={
            () => Communications.phonecall('0123456789',true)
          }>
          <Text style={styles.buttonText}>
            MAKE AN EMERGENCY PHONECALL
          </Text>
        </TouchableOpacity>
        {/* Mail: email(to, cc, bcc, subject, body) */}
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.button}
          onPress={() =>
            Communications.email(
              [
                'amina.oxe@gmail.com',
                'mirsad.hasic8@gmailcom'
              ],
              null,
              null,
              'EMERGENCY',
              'Demo Content for the mail',
            )
          }>
          <Text style={styles.buttonText}>
            SEND AN EMERGENCY EMAIL
          </Text>
        </TouchableOpacity>
        {/* SMS: text(phoneNumber = null, body = null) */}
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.button}
          onPress={() =>
            Communications.text(
              '0123456789',
              'EMERGENCY'
            )
          }>
          <Text style={styles.buttonText}>
            SEND AN EMERGENCY TEXT
          </Text>
        </TouchableOpacity>
        
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(213, 242, 237)"
    
  },
  buttonStyle: {
    justifyContent: "center",
    marginTop: 15,
    padding: 10,
    backgroundColor: "#74ab93",
  },
  appTitle: {
    fontSize: 50,
    marginBottom: 40,
    textShadowColor: "black",
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: "#398564",
    marginBottom: 20,
  },

  buttonText: {
    color: "white",
    fontWeight: "normal",
    fontSize: 16,
    textTransform: "uppercase",
    textAlign: "center",
  },
  logo:{
    width: 150,
    height: 150
  }
});
