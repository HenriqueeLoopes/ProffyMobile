import React, { useEffect } from "react";
import { View, Text, Image, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-community/async-storage";

import backgroundImg from "../../assets/images/icons/purble-bubbles-backgorund.png";
import bookIcon from "../../assets/images/icons/book-icon.png";
import nextIcon from "../../assets/images/icons/back.png";

import styles from "./styles";

function Onboarding() {
  const navigation = useNavigation();

  useEffect(() => {
    async function getOnboardingView(){
      try {
        const response = await AsyncStorage.getItem('@onBoarding');
        if (response == 'True'){
          navigation.navigate('Login');
        }
      } catch (error) {
        return console.log(error);
      }
    }
    getOnboardingView();
  }, []);

  function handleNextPage() {
    navigation.navigate("Onboarding2");
    return;
  }
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <ImageBackground
          source={backgroundImg}
          style={styles.banner}
          resizeMode="contain"
        >
          <Image source={bookIcon} style={styles.estudarIcon} />
        </ImageBackground>
      </View>
      <View style={styles.bottomBar}>
        <Text style={styles.numberBottom}>01.</Text>
        <Text style={styles.textBottom}>
          Encontre vários professores para ensinar você
        </Text>
        <View style={styles.buttonsContainer}>
          <Text style={styles.currentPageIndicator}>
            .<Text style={styles.othersPageIndicator}>.</Text>
          </Text>
          <TouchableOpacity onPress={handleNextPage} style={styles.nextButton}>
            <Image source={nextIcon} style={styles.nextIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Onboarding;
