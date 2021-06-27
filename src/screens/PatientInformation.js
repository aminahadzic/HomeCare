import React, { useContext, useState, useEffect } from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";
import Communications from "react-native-communications";
import { phonecall, email, text, web } from "react-native-communications";
import { UserContext } from "../../App";
import firebase from "firebase";
import Logo from "../assets/logo.png";

const ProfileScreen = () => {
  //const userContext = useContext(UserContext)
  const [user, setUser] = useState(null);
  const getUser = async () => {
    let currentUserEmail = firebase.auth().currentUser.email;
    await firebase
      .database()
      .ref("users")
      .once("value")
      .then((snapshot) => {
        setUser(snapshot.val().filter((obj) => obj.Email === currentUserEmail));
      });
  };
  useEffect(() => {
    getUser();
    console.log("user: ", user)
  }, []);
  if (user) {
    return (
      <View style={styles.container}>
      <Image
        source={Logo}
        resizeMode="contain"
        style={{
          position: "absolute",
          width: "110%",
          opacity: 0.2,
          bottom: 0,
        }}
      />

      <Text style={styles.title}>PATIENT INFORMATION</Text>

      <View style={styles.textRow}>
        <Text style={styles.bold}>Email address </Text>
        <Text style={styles.infoText}>{user[0].Email}</Text>
      </View>

      <View style={styles.textRow}>
        <Text style={styles.bold}>First name </Text>
        <Text style={styles.infoText}>{user[0].FirstName}</Text>
      </View>

      <View style={styles.textRow}>
        <Text style={styles.bold}>Last name </Text>
        <Text style={styles.infoText}>{user[0].LastName}</Text>
      </View>

      <View style={styles.textRow}>
        <Text style={styles.bold}>Home address </Text>
        <Text style={styles.infoText}>{user[0].Adress}</Text>
      </View>

      <View style={styles.textRow}>
        <Text style={styles.bold}>Age </Text>
        <Text style={styles.infoText}>{user[0].Age}</Text>
      </View>

      <View style={styles.textRow}>
        <Text style={styles.bold}>Health conditions </Text>
        <Text style={styles.infoText}>Alzheimers: {user[0].Conditions.Alzheimers}</Text>
      </View>
    </View>
    );
  }else{
    return(<View style={styles.container}></View>)

  }
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    padding: 20,
    position: "relative",
  },

  title: {
    textAlign: "left",
    fontSize: 24,
    fontWeight: "bold",
    color: "#154f36",
    marginBottom: 20,
  },

  textRow: {
    marginBottom: 20,
    paddingBottom: 4,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,.2)",
  },

  bold: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 1,
    color: "#212121",
  },

  infoText: {
    fontSize: 20,
    color: "black",
  },
  
});
