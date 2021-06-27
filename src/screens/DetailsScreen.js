import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const DetailsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <Button style={styles.button}
        title="Go to home"
        onPress={() => navigation.goBack("Emergency")}
      />
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button:{
    backgroundColor: "rgb(213, 242, 237)"
  }
});
