import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../pages/Login";
import Cadastro1 from "../pages/Cadastro1";
import Cadastro2 from "../pages/Cadastro2";
import SucessSignUp from "../pages/SucessSignUp";
import LostPassword from "../pages/LostPassword";
import SucessResetSend from "../pages/SucessResetSend";

const { Navigator, Screen } = createStackNavigator();

function AuthRoutes() {
  return (
    <Navigator
      initialRouteName='Login'
      screenOptions={{ headerShown: false }}
    >
      <Screen name="Login" component={Login} />
      <Screen name="Cadastro1" component={Cadastro1} />
      <Screen name="Cadastro2" component={Cadastro2} />
      <Screen name="SucessSignUp" component={SucessSignUp} />
      <Screen name="LostPassword" component={LostPassword} />
      <Screen name="SucessResetSend" component={SucessResetSend} />
    </Navigator>
  );
}

export default AuthRoutes;
