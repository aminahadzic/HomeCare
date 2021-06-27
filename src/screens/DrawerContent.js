import React, { useState, useEffect, useContext } from "react";
import firebase from "firebase/app";
import { View, StyleSheet } from "react-native";
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from "react-native-paper";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { useNavigation } from '@react-navigation/native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { UserContext } from "../../App";

const DrawerContent = ({ currentUser, ...props}) => {
  //const navigation = useNavigation();
  const paperTheme = useTheme();
  const userContext = useContext(UserContext)
  //const [currentUser, setCurrentUser] = useState(null);
  const [userEmail, setUserEmail] = useState(null)
  // const getUser = () => {
  //   let currentUserEmail;

  //   //currentUserEmail = await firebase.auth().currentUser.email;
  //  setUserEmail(firebase.auth().currentUser.email)


  //   firebase
  //     .database()
  //     .ref("users")
  //     .once("value")
  //     .then((snapshot) => {
  //       setCurrentUser(
  //         snapshot.val().filter((obj) => obj.Email === userEmail)
  //       );
  //     });
  // };

  useEffect(() => {
    //getUser();
    //console.log("drawer content useEffect: ", currentUser);
  }, []);

  if (currentUser!= null || currentUser.length>0) {
    return (
      <View style={{ flex: 1 }}>
        <DrawerContentScrollView {...props}>
          <View style={styles.drawerContent}>
            <View style={styles.userInfoSection}>
              <View style={{ flexDirection: "row", marginTop: 15 }}>
                <Avatar.Image
                  source={{
                    uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1200px-Circle-icons-profile.svg.png",
                  }}
                  size={50}
                />
                <View style={{ marginLeft: 15, flexDirection: "column" }}>
                  {/* <Title style={styles.title}>
                    {currentUser[0].FirstName} {currentUser[0].LastName}
                  </Title>
                  <Caption style={styles.caption}>
                    {currentUser[0].Email}
                  </Caption> */}
                </View>
              </View>

              <View style={styles.row}>
                <View style={styles.section}>
                  <Paragraph style={[styles.paragraph, styles.caption]}>
                    HomeCare
                  </Paragraph>
                </View>

                <View style={styles.section}></View>
              </View>
            </View>

            <Drawer.Section style={styles.drawerSection}>
              <DrawerItem
                icon={({ color, size }) => (
                  <Icon name="alert-circle" color={color} size={size} />
                )}
                label="Emergency"
                onPress={() => {
                  props.navigation.navigate("Emergency");
                }}
              />
              <DrawerItem
                icon={({ color, size }) => (
                  <Icon name="face-outline" color={color} size={size} />
                )}
                label="Patient Information"
                onPress={() => {
                  props.navigation.navigate("Patient information");
                }}
              />
            </Drawer.Section>
            <Drawer.Section title="Preferences">
              <TouchableRipple
                onPress={() => {
                  // toggleTheme();
                }}
              >
                <View style={styles.preference}>
                  <Text>Dark Theme</Text>
                  <View pointerEvents="none">
                    <Switch value={paperTheme.dark} />
                  </View>
                </View>
              </TouchableRipple>
            </Drawer.Section>
          </View>
        </DrawerContentScrollView>
        <Drawer.Section style={styles.bottomDrawerSection}>
          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="exit-to-app" color={color} size={size} />
            )}
            label="Sign Out"
            onPress={() => firebase.auth().signOut()}
          />
        </Drawer.Section>
      </View>
    );
  } else {
    return (
      <View>
        <Text>Loading...</Text>
        <Drawer.Section style={styles.bottomDrawerSection}>
          <DrawerItem
            icon={({ color, size }) => (
              <Icon name="exit-to-app" color={color} size={size} />
            )}
            label="Sign Out"
            onPress={() => firebase.auth().signOut()}
          />
        </Drawer.Section>
      </View>

    );
  }
};

export default DrawerContent;

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
