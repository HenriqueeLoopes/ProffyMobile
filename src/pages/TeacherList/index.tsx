import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
import {
  ScrollView,
  TextInput,
  BorderlessButton,
  RectButton,
} from "react-native-gesture-handler";
import api from "../../services/api";
import { Feather } from "@expo/vector-icons";
import AsyncStorage from "@react-native-community/async-storage";

import styles from "./styles";
import PageHeader from "../../components/PageHeader";
import TeacherItem, { Teacher } from "../../components/TeacherItem";

function TeacherList() {
  const [teachersCount, setTeachersCount] = useState(0);
  const [teachers, setTeachers] = useState([]);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);
  const [subject, setSubject] = useState("");
  const [week_day, setWeek_Day] = useState("");
  const [time, setTime] = useState("");

  async function loadFavorites() {
    const storage = await AsyncStorage.getItem("favorites");
    if (storage) {
      const FavoritedTeachers = JSON.parse(storage);
      const FavoritedTeachersID = FavoritedTeachers.map((teacher: Teacher) => {
        return teacher.id;
      });
      setFavorites(FavoritedTeachersID);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      async function fetchData() {
        try {
          const response = await api.get("/all-classes");
          setTeachers(response.data);
          return setTeachersCount(response.data.length);
        } catch (error) {
            return console.log(error);
        }
      }
      fetchData();
      loadFavorites();
    }, 50);
  }, []);

  function handleToggleFiltersVisible() {
    setIsFiltersVisible(!isFiltersVisible);
  }

  async function handleFiltersSubmit() {
    loadFavorites();
    try {
      const response = await api.get("/classes", {
        params: {
          subject,
          week_day,
          time,
        },
      });
      setTeachersCount(response.data.length);
      setIsFiltersVisible(false);
      return setTeachers(response.data);
    } catch (error) {
      return console.log(error);
    }
  }

  return (
    <ScrollView style={styles.container}>
      <PageHeader
        title="Proffys disponiveis"
        headerRight={
          <>
            <Text style={styles.proffyQuantity}>🤓 {teachersCount} proffys</Text>
            <BorderlessButton onPress={handleToggleFiltersVisible}>
              <Feather name="filter" size={24} color="#0080ff" />
            </BorderlessButton>
          </>
        }
      >
        {isFiltersVisible && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Materia</Text>
            <TextInput
              style={styles.input}
              placeholder="Qual materia ?"
              placeholderTextColor="#c1bccc"
              value={subject}
              onChangeText={(text) => setSubject(text)}
            />
            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da semana</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Qual dia?"
                  placeholderTextColor="#c1bccc"
                  value={week_day}
                  onChangeText={(text) => setWeek_Day(text)}
                />
              </View>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horario</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Qual horario?"
                  placeholderTextColor="#c1bccc"
                  value={time}
                  onChangeText={(text) => setTime(text)}
                />
              </View>
            </View>
            <RectButton
              onPress={handleFiltersSubmit}
              style={styles.submitButton}
            >
              <Text style={styles.submitTextButton}>Filtrar</Text>
            </RectButton>
          </View>
        )}
      </PageHeader>
      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 16 }}
      >
        {teachers.map((teacher: Teacher, index) => {
          return (
            <TeacherItem
              key={index}
              teacher={teacher}
              favorited={favorites.includes(teacher.id)}
            />
          );
        })}
      </ScrollView>
    </ScrollView>
  );
}

export default TeacherList;
