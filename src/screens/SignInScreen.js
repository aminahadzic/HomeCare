import React, { useState, useContext } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Dimensions,
  TextInput,
} from "react-native";
import firebase from "firebase/app";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useTheme } from "@react-navigation/native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import LinearGradient from "react-native-linear-gradient";
import { UserContext } from "../../App";

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState({});
  const [loginError, setLoginError] = useState("")

  const userContext = useContext(UserContext)

  const onLoginPress = () => {
    firebase
      .database()
      .ref("users")
      .once("value")
      .then((snapshot) => {
        userContext.userDispatch(snapshot.val().filter((obj) => obj.Email === email))
        console.log(
          "specific user data: ",
          snapshot.val().filter((obj) => obj.Email === email)
         // 'user email: ', snapshot.val()
        );
      });
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => console.log("res: ", res))
      .catch((err) => {
        alert(err)
      });
    console.log('data: ', data[2])
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header}> Welcome!</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.text_footer}>Email</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color="#05375a" size={20} />
          <TextInput
            onChangeText={setEmail}
            placeholder="Input your email"
            style={styles.textInput}
            autoCapitalize="none"
          />
        </View>
        <Text style={[styles.text_footer, { marginTop: 35 }]}>Password</Text>
        <View style={styles.action}>
          <FontAwesome name="lock" color="#05375a" size={20} />
          <TextInput
            onChangeText={setPassword}
            placeholder="  Input your password"
            secureTextEntry={true}
            style={styles.textInput}
          />
        </View>
        <TouchableOpacity
          onPress={() => onLoginPress()}
          style={[
            styles.signIn,
            {
              borderColor: "#009387",
              backgroundColor: "#009387",
              borderWidth: 5,
              marginTop: 15,
            },
          ]}
        >
          <Text style={styles.textSign}>LOG IN </Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#009387",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: Platform.OS === "ios" ? 3 : 5,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
  text_footer: {
    color: "#05375a",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
  },
  button: {
    alignItems: "center",
    padding: 10,
    backgroundColor: "blue",
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 20,
    fontWeight: "normal",
    color: "white",
  },
  textPrivate: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
  },
  color_textPrivate: {
    color: "grey",
  },
});
