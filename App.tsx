import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { AppLoading } from "expo";
import * as Updates from 'expo-updates';
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

  useEffect(() => {
    async function getAsyncUpdates(){
      try {
        const update = await Updates.checkForUpdateAsync();
        if (update.isAvailable) {
          const newUpdate = await Updates.fetchUpdateAsync();
          if (!newUpdate.isNew){
            return;
          }
          // ... notify user of update ...
          await Updates.reloadAsync();
        }
      } catch (e) {
        //handle error
        console.log('Expo-Updates Error: ' + e);
      }
    }
    getAsyncUpdates();
  }, []);

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
