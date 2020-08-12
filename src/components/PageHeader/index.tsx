import React, { ReactNode } from "react";
import { View, Image, Text } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

import backIcon from "../../assets/images/icons/back.png";
import logoImg from "../../assets/images/logo.png";

interface PageHeaderProps {
  title: string;
  headerRight?: ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, headerRight, children }) => {
    const navigation = useNavigation();
  function handleGoBack() {
      navigation.navigate('Landing');
  }
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <BorderlessButton onPress={handleGoBack}>
          <Image source={backIcon} resizeMode="contain" />
        </BorderlessButton>
        <Text style={styles.headerText}>Estudar</Text>
        <Image source={logoImg} resizeMode="contain" style={{ height: 30, width: 50}} />
      </View>
      <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      {headerRight}
      </View>
      {children}
    </View>
  );
};

export default PageHeader;
