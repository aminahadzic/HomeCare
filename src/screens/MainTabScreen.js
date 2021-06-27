import React, { useContext } from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/Ionicons";

import Emergency from "./Emergency";
import DetailsScreen from "./DetailsScreen";
import ProfileScreen from "./PatientInformation";
import ExploreScreen from "./ExploreScreen";
import { UserContext } from "../../App";
const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();

const ProfileStack = createStackNavigator();
const ExploreStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();


const MainTabScreen = ({user}) => (
  <Tab.Navigator initialRouteName="Emergency" activeColor="#fff">
    <Tab.Screen
      name="Emergency"
      component={HomeStackScreen}
      options={{
        tabBarLabel: "Emergency",
        tabBarColor: "#74ab93",
        tabBarIcon: ({ color }) => (
          <Icon name="ios-home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Patient information"
      component={ProfileStackScreen}
      options={{
        tabBarLabel: "Patient information",
        tabBarColor: "#74ab93",
        tabBarIcon: ({ color }) => (
          <Icon name="ios-person" color={color} size={26} />
        ),
      }}
    />
    {
      <Tab.Screen
        name="Notifications"
        component={DetailsStackScreen}
        options={{
          tabBarLabel: "Updates",
          tabBarColor: "#5E6E79",
          tabBarIcon: ({ color }) => (
            <Icon name="ios-notifications" color={color} size={26} />
          ),
        }}
      />
    }
    {
      <Tab.Screen
        name="Explore"
        component={ExploreStackScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarColor: "#BD9788",
          tabBarIcon: ({ color }) => (
            <Icon name="ios-aperture" color={color} size={26} />
          ),
        }}
      />
    }
  </Tab.Navigator>
);

export default MainTabScreen;

const ProfileStackScreen = ({ navigation, user }) => (


  <ProfileStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#74ab93",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <ProfileStack.Screen
      name="ProfileScreen"
      component={ProfileScreen}
      options={{
        title: "Patient information",
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#74ab93"
            onPress={() => {
              navigation.openDrawer();
            }}
          ></Icon.Button>
        ),
      }}
    />
  </ProfileStack.Navigator>
);

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#74ab93",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <HomeStack.Screen
      name="HomeScreen"
      component={Emergency}
      options={{
        title: "Emergency",
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#74ab93"
            onPress={() => {
              navigation.openDrawer();
            }}
          ></Icon.Button>
        ),
      }}
    />
  </HomeStack.Navigator>
);

const ExploreStackScreen = ({ navigation }) => (
  <ExploreStack.Navigator
  
    screenOptions={{
      headerStyle: {
        backgroundColor: "#74ab93",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    
   <ExploreStack.Screen
      name="ExploreScreen"
      component={ExploreScreen}
      options={{
        title: "Explore",
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#BD9788"
            onPress={() => {
              navigation.openDrawer();
            }}
          ></Icon.Button>
        ),
      }}
    />
   
  </ExploreStack.Navigator>
);

const DetailsStackScreen = ({ navigation }) => (
  <DetailsStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#74ab93",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    }}
  >
    <DetailsStack.Screen
      name="DetailsScreen"
      component={DetailsScreen}
      options={{
        title: "Details",
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#5E6E79"
            onPress={() => {
              navigation.openDrawer();
            }}
          ></Icon.Button>
        ),
      }}
    />
  </DetailsStack.Navigator>
);
