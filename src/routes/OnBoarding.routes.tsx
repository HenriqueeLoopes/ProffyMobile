import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Onboarding from "../pages/Onboarding";
import Onboarding2 from "../pages/Onboarding2";

const { Navigator, Screen } = createStackNavigator();

function OnBoardingRoute() {
  return (
    <Navigator
      initialRouteName='Onboarding1'
      screenOptions={{ headerShown: false }}
    >
      <Screen name="Onboarding1" component={Onboarding} />
      <Screen name="Onboarding2" component={Onboarding2} />
    </Navigator>
  );
}

export default OnBoardingRoute;
