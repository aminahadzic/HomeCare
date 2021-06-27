import React, { useEffect, useState, useReducer } from "react";
import { View, ActivityIndicator, Text } from "react-native";
import firebase from "firebase";
require("firebase/auth");

import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
} from "react-native-paper";

import DrawerContent from "./src/screens/DrawerContent";
import MainTabScreen from "./src/screens/MainTabScreen";
import RootStackScreen from "./src/screens/RootStackScreen";
import DetailsScreen from "./src/screens/DetailsScreen";
import SignInScreen from "./src/screens/SignInScreen";
const Drawer = createDrawerNavigator();

export const UserContext = React.createContext();
const initialState = [];
const reducer = (state, action) => {
  return (state = action);
};

const App = () => {
  const [loggedIn, setloggedIn] = useState(true);
  const [user, dispatch] = useReducer(reducer, initialState);
  const [currentUserEmail, setCurrentUserEmail] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  var firebaseConfig = {
    apiKey: "AIzaSyCouhEdjpC-IrQyBmIbrg4ggCK_XQXlinA",
    authDomain: "awesomeproject-155e2.firebaseapp.com",
    databaseURL:
      "https://awesomeproject-155e2-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "awesomeproject-155e2",
    storageBucket: "awesomeproject-155e2.appspot.com",
    messagingSenderId: "1061258996677",
    appId: "1:1061258996677:web:7871cd22a13536bb8e79ac",
    measurementId: "G-0M1YHG5DJB",
  };
  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app(); // if already initialized, use that one
  }
  // firebase.analytics();

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setCurrentUserEmail(user.email);
      setloggedIn(true);
    } else {
      setloggedIn(false);
    }
  });

  const getUser = () => {
    firebase
      .database()
      .ref("users")
      .once("value")
      .then((snapshot) => {
        if (currentUserEmail != "") {
          setCurrentUser(
            snapshot.val().filter((obj) => obj.Email === currentUserEmail)
          );
          setIsLoading(false);
        }
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    setIsLoading(true);
    getUser();
  }, []);

  //const renderContent = () => {
  if (loggedIn) {
    console.log("appjs user ", user);
    return (
      <UserContext.Provider value={{ userState: user, userDispatch: dispatch }}>
        <NavigationContainer>
          {isLoading && (
            <Drawer.Navigator
              drawerContent={(props) => (
                <DrawerContent {...props} currentUser={user} />
              )}
            >
              <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
            </Drawer.Navigator>
          )}
        </NavigationContainer>
        {/* <View>
        <Text>
          {user.Email}
          </Text>
      </View> */}
      </UserContext.Provider>
    );
  } else {
    return (
      <UserContext.Provider value={{ userState: user, userDispatch: dispatch }}>
        <SignInScreen />
      </UserContext.Provider>
    );
  }
  //};

  // return (<NavigationContainer>
  //   <Drawer.Navigator
  //     drawerContent={(props) => <DrawerContent {...props} />}
  //   >
  //     <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
  //   </Drawer.Navigator>
  // </NavigationContainer>);
};
export default App;
