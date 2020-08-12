import React, { useState } from "react";
import { Text } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { ScrollView } from "react-native-gesture-handler";
import { useFocusEffect } from '@react-navigation/native';

import styles from "./styles";

import PageHeader from "../../components/PageHeader";
import TeacherItem, { Teacher } from "../../components/TeacherItem";

function Favorites() {
  const [favoritesCount, setFavoritesCount] = useState(0);
  const [favorites, setFavorites] = useState([]);

  function loadFavorites() {
    AsyncStorage.getItem("favorites").then((response) => {
      if (response) {
        const favoritedTeachers = JSON.parse(response);
        setFavoritesCount(favoritedTeachers.length);
        return setFavorites(favoritedTeachers);
      }
    });
  }

  useFocusEffect(
    React.useCallback(() => {
      loadFavorites();
    }, [])
  );

  return (
    <ScrollView style={styles.container}>
      <PageHeader title="Meus Proffys favoritos" headerRight={
          <>
          <Text style={styles.proffyQuantity}>😍  {favoritesCount} proffys</Text>
          </>
        } />
      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 16 }}
      >
        {favorites.map((teacher: Teacher, index) => {
          return <TeacherItem key={index} teacher={teacher} favorited />;
        })}
      </ScrollView>
    </ScrollView>
  );
}

export default Favorites;
