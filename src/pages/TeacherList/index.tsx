import React, { useState, useEffect } from "react";
import { View, Text, Image, Platform, Alert } from "react-native";
import {
  ScrollView,
  TextInput,
  BorderlessButton,
  RectButton,
} from "react-native-gesture-handler";
import api from "../../services/api";
import { Feather } from "@expo/vector-icons";
import AsyncStorage from "@react-native-community/async-storage";
import { Picker } from "@react-native-community/picker";

import styles from "./styles";
import PageHeader from "../../components/PageHeader";
import TeacherItem, { Teacher } from "../../components/TeacherItem";

function TeacherList() {
  const [teachersCount, setTeachersCount] = useState(0);
  const [teachers, setTeachers] = useState([]);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);
  const [subject, setSubject] = useState('TI');
  const [week_day, setWeek_Day] = useState('1');
  const [time, setTime] = useState('540');

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
      if (error.response.status && error.response.status == 400){
        return Alert.alert('Proffy', 'Nenhuma aula encontrada com este filtro!');
      }
      return console.log(error.response);
    }
  }

  return (
    <ScrollView style={styles.container}>
      <PageHeader
        title="Proffys disponiveis"
        headerRight={
          <>
            <Text style={styles.proffyQuantity}>
              🤓 {teachersCount} proffys
            </Text>
            <BorderlessButton onPress={handleToggleFiltersVisible}>
              <Feather name="filter" size={24} color="#0080ff" />
            </BorderlessButton>
          </>
        }
      >
        {isFiltersVisible && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Materia</Text>
            <Picker
              selectedValue={subject}
              style={styles.input}
              onValueChange={(itemValue) => setSubject(itemValue.toString())}
            >
              <Picker.Item label="TI" value="TI" />
            </Picker>
            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da semana</Text>
                <Picker
                  selectedValue={week_day}
                  style={styles.input}
                  onValueChange={(itemValue) =>
                    setWeek_Day(itemValue.toString())
                  }
                >
                  <Picker.Item label="Domingo" value={"0"} />
                  <Picker.Item label="Segunda-Feira" value={"1"} />
                  <Picker.Item label="Terca-Feira" value={"2"} />
                  <Picker.Item label="Quarta-Feira" value={"3"} />
                  <Picker.Item label="Quinta-Feira" value={"4"} />
                  <Picker.Item label="Sexta-Feira" value={"5"} />
                  <Picker.Item label="Sabado" value={"6"} />
                </Picker>
              </View>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horario</Text>
                <Picker
                  selectedValue={time}
                  style={styles.input}
                  onValueChange={(itemValue) => setTime(itemValue.toString())}
                >
                  <Picker.Item label="07:00AM" value={"07:00"} />
                  <Picker.Item label="08:00AM" value={"08:00"} />
                  <Picker.Item label="09:00AM" value={"09:00"} />
                  <Picker.Item label="10:00AM" value={"10:00"} />
                  <Picker.Item label="11:00AM" value={"11:00"} />
                  <Picker.Item label="12:00PM" value={"12:00"} />
                  <Picker.Item label="13:00PM" value={"13:00"} />
                  <Picker.Item label="14:00PM" value={"14:00"} />
                  <Picker.Item label="15:00PM" value={"15:00"} />
                  <Picker.Item label="16:00PM" value={"16:00"} />
                  <Picker.Item label="17:00PM" value={"17:00"} />
                  <Picker.Item label="18:00PM" value={"18:00"} />
                </Picker>
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
