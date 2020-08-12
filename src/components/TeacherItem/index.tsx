import React, { useState } from "react";
import { View, Image, Text, Linking } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-community/async-storage";

import styles from "./styles";

import heartOutlineIcon from "../../assets/images/icons/heart-outline.png";
import unfavoriteIcon from "../../assets/images/icons/unfavorite.png";
import whatsAppIcon from "../../assets/images/icons/whatsapp.png";
import api from "../../services/api";
import TeacherTimeItem from "../TeacherTimeItem";

export interface Teacher {
  id: number;
  name: string;
  email: string;
  avatar: string;
  bio: string;
  week_day: number;
  cost: number;
  subject: string;
  from: number;
  to: number;
  whatsapp: string;
  user_id: number;
}

interface TeacherItemProps {
  teacher: Teacher;
  favorited: boolean;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher, favorited }) => {
  const teachers = [teacher];
  const [isFavorited, setIsFavorited] = useState(favorited);
  function handleLinkToWhatsApp() {
    Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}"`);
    api.post("/connections", { user_id: teacher.id });
  }

  async function handleToggleFavorite() {
    const favorites = await AsyncStorage.getItem("favorites");
    let favoritesArray = [];
    if (favorites) {
      favoritesArray = JSON.parse(favorites);
    }
    if (isFavorited) {
      const favoritedIndex = favoritesArray.findIndex(
        (teacherItem: Teacher) => {
          return teacherItem.id === teacher.id;
        }
      );
      favoritesArray.splice(favoritedIndex, 1);
      setIsFavorited(false);
    } else {
      favoritesArray.push(teacher);
      setIsFavorited(true);
    }
    await AsyncStorage.setItem("favorites", JSON.stringify(favoritesArray));
  }

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image source={{ uri: teacher.avatar }} style={styles.avatar} />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>{teacher.name}</Text>
          <Text style={styles.subject}>{teacher.subject}</Text>
        </View>
      </View>
      <Text style={styles.bio}>{teacher.bio}</Text>
      <View style={styles.middleContainer}>
        {teachers.map((item, i) => {
          return (
            <TeacherTimeItem
              key={i}
              week_day={item.week_day}
              from={item.from}
              to={item.to}
              enabled
            />
          );
        })}
      </View>
      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço da minha hora: {"   "}{" "}
          <Text style={styles.priceValue}>R$ {teacher.cost} reais</Text>{" "}
        </Text>
        <View style={styles.buttonsContainer}>
          <RectButton
            onPress={handleToggleFavorite}
            style={[styles.favoriteButton, isFavorited ? styles.favorited : {}]}
          >
            {isFavorited ? (
              <Image source={unfavoriteIcon} />
            ) : (
              <Image source={heartOutlineIcon} />
            )}
          </RectButton>
          <RectButton
            onPress={handleLinkToWhatsApp}
            style={styles.contactButton}
          >
            <Image source={whatsAppIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato.</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
};

export default TeacherItem;
