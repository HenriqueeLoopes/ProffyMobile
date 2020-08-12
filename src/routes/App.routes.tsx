import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Landing from "../pages/Landing";
import GiveClasses from "../pages/GiveClasses";
import StudyTabs from "./StudyTabs";
import Profile from "../pages/Profile";
import SucessProfileUpdate from "../pages/SucessProfileUpdate";

const { Navigator, Screen } = createStackNavigator();

function AppRoutes() {
  return (
    <Navigator
      initialRouteName="Landing"
      screenOptions={{ headerShown: false }}
    >
      <Screen name="Landing" component={Landing} />
      <Screen name="GiveClasses" component={GiveClasses} />
      <Screen name="Study" component={StudyTabs} />
      <Screen name="Profile" component={Profile} />
      <Screen name="SucessProfileUpdate" component={SucessProfileUpdate} />
    </Navigator>
  );
}

export default AppRoutes;
