import React, { useState } from "react";
import { Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import TeacherList from "../pages/TeacherList";
import Favorites from "../pages/Favorites";

const { Navigator, Screen } = createBottomTabNavigator();

function StudyTabs() {
  return (
    <Navigator
      tabBarOptions={{
        style: {
          elevation: 0,
          shadowOpacity: 0,
          heigth: Platform.OS === "ios" ? 84 : 64,
        },
        tabStyle: {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          paddingBottom: Platform.OS === "ios" ? 20 : 0,
        },
        safeAreaInsets: {
          bottom: 0,
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: Platform.OS === "ios" ? 24 : 20,
        },
        labelStyle: {
          fontFamily: "Archivo_700Bold",
          fontSize: 14,
          marginLeft: 10,
        },
        inactiveBackgroundColor: "#fafafc",
        activeBackgroundColor: "#EBEBF5",
        inactiveTintColor: "#c1bccc",
        activeTintColor: "#32264D",
      }}
    >
      <Screen
        name="TeacherList"
        options={{
          tabBarLabel: "Proffys",
          tabBarIcon: ({ color, size, focused }) => {
            return <Ionicons name="ios-easel" size={size} color={focused ? "#8257E5" : color} />;
          },
        }}
        component={TeacherList}
      />
      <Screen
        name="Favorites"
        options={{
          tabBarLabel: "Favoritos",
          tabBarIcon: ({ color, size, focused }) => {
            return <Ionicons name="ios-heart" size={size} color={focused ? "#8257E5" : color} />;
          },
        }}
        component={Favorites}
      />
    </Navigator>
  );
}

export default StudyTabs;
