//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

// create a component
class EmailAndPassword extends Component {
  state = {
    email: "",
    password: "",
    error: "",
    loading: false,
  };

  onBottomPress = () => {
    navigation.navigate("HomeScreen");
  };
}
onLoginSuccess = () => {
  this.setState({
    error: "",
    loading: false,
  });
};
render();
return (
  <View style={styles.container}>
    <TextInput
      placeholder="email"
      style={styles.input}
      value={this.state.email}
      onChangeText={(email) => this.setState({ email })}
    />

    <TextInput
      placeholder="password"
      style={styles.input}
      secureTextEntry
      value={this.state.password}
      onChangeText={(password) => this.setState({ password })}
    />
    <TouchableOpacity
      style={styles.buttonContainer}
      onPress={this.onBottomPress}
    >
      <Text style={styles.buttonText}>Login</Text>
    </TouchableOpacity>
    <Text style={styles.errorText}>{this.state.error}</Text>
  </View>
);

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 250,
  },

  input: {
    height: 40,
    backgroundColor: "rgba(101, 171, 168, 0.41)",
    paddingLeft: 10,
    marginBottom: 15,
    borderRadius: 5,
    fontSize: 15,
  },
  errorText: {
    marginTop: 10,
    fontSize: 25,
    color: "white",
    alignSelf: "center",
  },
  buttonText: {
    opacity: 0.95,
    paddingTop: 5,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  buttonContainer: {
    height: 39,
    backgroundColor: "rgba(0, 169, 161, 1)",

    borderRadius: 8,
  },
});

//make this component available to the app
export default EmailAndPassword;
