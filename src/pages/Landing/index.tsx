import React, { useState, useEffect } from "react";
import { View, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RectButton, BorderlessButton } from "react-native-gesture-handler";
import api from "../../services/api";

import styles from "./styles";

import landingImg from "../../assets/images/landing.png";
import studyIcon from "../../assets/images/icons/study.png";
import giveClassesIcon from "../../assets/images/icons/give-classes.png";
import heartIcon from "../../assets/images/icons/heart.png";
import logOutIcon from "../../assets/images/icons/log-out-icon.png";
import { useAuth } from "../../contexts/auth";

function Landing() {
  const { user, signOut } = useAuth();
  const navigation = useNavigation();
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get("/connections").then((response) => {
      const { total } = response.data;
      setTotalConnections(total);
    });
  }, []);

  function handleNavigationToGiveClassesPage() {
    navigation.navigate("GiveClasses");
  }

  function handleNavigateToStudyPages() {
    navigation.navigate("Study");
  }

  function handleLogOutPress() {
    return signOut();
  }

  function handleProfilePress() {
    return;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatarContainer}>
          <BorderlessButton onPress={handleProfilePress}>
            <Image
              source={{
                uri:
                  user?.avatar ||
                  "https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png",
              }}
              style={styles.avatarImg}
            />
          </BorderlessButton>
          <Text style={styles.profileName}>{user?.name}</Text>
        </View>
        <BorderlessButton onPress={handleLogOutPress}>
          <Image
            source={logOutIcon}
            style={{ borderRadius: 50, borderWidth: 0.5, borderColor: "#FFF" }}
          />
        </BorderlessButton>
      </View>

      <View style={styles.topContainer}>
        <Image source={landingImg} style={styles.banner} />
      </View>

      <View style={styles.bottomContainer}>
        <Text style={styles.title}>
          Seja bem vindo, {"\n"}
          <Text style={styles.titleBold}>O que deseja fazer?</Text>
        </Text>
        <View style={styles.buttonsContainer}>
          <RectButton
            onPress={handleNavigateToStudyPages}
            style={[styles.button, styles.buttonPrimary]}
          >
            <Image source={studyIcon} />
            <Text style={styles.buttonText}>Estudar</Text>
          </RectButton>
          <RectButton
            onPress={handleNavigationToGiveClassesPage}
            style={[styles.button, styles.buttonSecondary]}
          >
            <Image source={giveClassesIcon} />
            <Text style={styles.buttonText}>Dar aulas</Text>
          </RectButton>
        </View>
        <Text style={styles.totalConnections}>
          Total de {totalConnections} conexoes ja realizadas{" "}
          <Image source={heartIcon} />
        </Text>
      </View>
    </View>
  );
}

export default Landing;
