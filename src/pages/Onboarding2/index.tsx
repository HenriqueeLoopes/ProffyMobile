import React from "react";
import { View, Text, Image, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { BorderlessButton } from "react-native-gesture-handler";

import backgroundImg from "../../assets/images/icons/green-bubbles-background.png";
import tvIcon from "../../assets/images/icons/tv-icon.png";
import nextIcon from "../../assets/images/icons/back.png";

import styles from "./styles";

function Onboarding2() {
  const navigation = useNavigation();
  function handleNextPage() {
    navigation.navigate("Login");
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
          <Image source={tvIcon} style={styles.estudarIcon} />
        </ImageBackground>
      </View>
      <View style={styles.bottomBar}>
        <Text style={styles.numberBottom}>02.</Text>
        <Text style={styles.textBottom}>
          Ou dê aulas sobre o que você mais conhece
        </Text>
        <View style={styles.buttonsContainer}>
          <Text style={styles.othersPageIndicator}>
            .<Text style={styles.currentPageIndicator}>.</Text>
          </Text>
          <BorderlessButton onPress={handleNextPage} style={styles.nextButton}>
            <Image source={nextIcon} style={styles.nextIcon} />
          </BorderlessButton>
        </View>
      </View>
    </View>
  );
}

export default Onboarding2;
