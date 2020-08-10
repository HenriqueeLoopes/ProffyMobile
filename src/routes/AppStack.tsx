import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Landing from "../pages/Landing";
import GiveClasses from "../pages/GiveClasses";
import StudyTabs from "./StudyTabs";
import Onboarding from "../pages/Onboarding";
import Onboarding2 from "../pages/Onboarding2";

const { Navigator, Screen } = createStackNavigator();

function AppStack() {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Onboarding1" screenOptions={{ headerShown: false }}>
        <Screen name="Onboarding1" component={Onboarding} />
        <Screen name="Onboarding2" component={Onboarding2} />
        <Screen name="Landing" component={Landing} />
        <Screen name="GiveClasses" component={GiveClasses} />
        <Screen name="Study" component={StudyTabs} />
      </Navigator>
    </NavigationContainer>
  );
}

export default AppStack;
