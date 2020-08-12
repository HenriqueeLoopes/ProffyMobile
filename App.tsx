import React from "react";
import { StatusBar } from "expo-status-bar";
import { AppLoading } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import {
  Archivo_400Regular,
  Archivo_700Bold,
  Archivo_600SemiBold,
  useFonts,
} from "@expo-google-fonts/archivo";
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import {AuthProvider} from './src/contexts/auth';
import Routes from "./src/routes";

export default function App() {
  let [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_600SemiBold,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <NavigationContainer>
      <AuthProvider>
        <StatusBar style='light' />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
    );
  }
}
