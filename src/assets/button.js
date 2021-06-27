import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

export default function FlatButton({ text }) {
  return (
    <TouchableOpacity>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
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
});
