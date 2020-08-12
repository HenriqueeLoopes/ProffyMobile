import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TextInput,
  ScrollView,
} from "react-native";
import {
  BorderlessButton,
  RectButton,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { PacmanIndicator } from "react-native-indicators";
import { useNavigation } from "@react-navigation/native";

import backgroundImg from "../../assets/images/icons/purble-bubbles-backgorund.png";
import backIcon from "../../assets/images/icons/back.png";
import logoImg from "../../assets/images/logo.png";
import cameraIcon from "../../assets/images/icons/camera-icon.png";

import styles from "./styles";

import { useAuth } from "../../contexts/auth";

export default function Profile() {
  const navigation = useNavigation();
  const { user, signOut } = useAuth();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState(user?.name);
  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: "", to: "" },
  ]);

  function addNewScheduleItem() {
    setScheduleItems([...scheduleItems, { week_day: 0, from: "", to: "" }]);
  }

  function removeScheduleItem() {
    setScheduleItems([{ week_day: 0, from: "", to: "" }]);
  }

  function setScheduleItemValue(
    position: number,
    field: string,
    value: string
  ) {
    const updatedScheduleItem = scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        return { ...scheduleItem, [field]: value };
      }
      return scheduleItem;
    });
    setScheduleItems(updatedScheduleItem);
  }

  async function handlePressSave(){
    return navigation.navigate('SucessProfileUpdate');
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <BorderlessButton onPress={() => navigation.navigate('Landing')}>
          <Image source={backIcon} resizeMode="contain" />
        </BorderlessButton>
        <Text style={styles.headerText}>Meu Perfil</Text>
        <Image
          source={logoImg}
          resizeMode="contain"
          style={{ height: 30, width: 50 }}
        />
      </View>

      <View style={styles.topContainer}>
        <ImageBackground
          source={backgroundImg}
          style={styles.banner}
          resizeMode="contain"
        >
          <View style={{ justifyContent: "flex-end", alignItems: "flex-end" }}>
            <Image source={{ uri: user?.avatar }} style={styles.profileImg} />
            <BorderlessButton style={{ marginTop: -35 }}>
              <Image source={cameraIcon} />
            </BorderlessButton>
          </View>
          <Text style={styles.profileName}>{user?.name}</Text>
          <Text style={styles.profileSubject}>{user?.subject}</Text>
        </ImageBackground>
      </View>
      <View style={styles.bottomContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.profileDataContainer}
        >
          <Text style={styles.profileTitle}>Seus dados:</Text>
          <View style={styles.lineSeparator} />
          <Text style={styles.dataLabel}>Nome</Text>
          <TextInput
            style={styles.dataInput}
            placeholder="Nome completo..."
            maxLength={40}
            placeholderTextColor="#6A6180"
            value={name}
            onChangeText={(text) => setName(text)}
          />
          <Text style={styles.dataLabel}>E-mail</Text>
          <TextInput
            style={styles.dataInput}
            placeholder="seu-email@gmail.com"
            maxLength={40}
            placeholderTextColor="#6A6180"
          />
          <Text style={styles.dataLabel}>WhatsApp</Text>
          <TextInput
            style={styles.dataInput}
            placeholder="(47) 9.8897-1458"
            maxLength={40}
            placeholderTextColor="#6A6180"
          />
          <Text style={styles.dataLabel}>Bio</Text>
          <TextInput
            style={styles.dataInput}
            placeholder="nos conte um pouco sobre voce..."
            maxLength={250}
            placeholderTextColor="#6A6180"
            multiline
          />

          <Text style={styles.profileTitle}>Sobre a aula</Text>
          <View style={styles.lineSeparator} />
          <Text style={styles.dataLabel}>Matéria</Text>
          <TextInput
            style={styles.dataInput}
            placeholder="Geografia"
            maxLength={250}
            placeholderTextColor="#6A6180"
            multiline
          />
          <Text style={styles.dataLabel}>Custo da sua hora por aula</Text>
          <TextInput
            style={styles.dataInput}
            placeholder="Quanto custa a sua aula?"
            maxLength={250}
            placeholderTextColor="#6A6180"
            keyboardType="numeric"
          />

          <View style={styles.timeAvailable}>
            <View style={styles.timeAvailableTitle}>
              <Text style={styles.profileTitle}>Horários disponíveis</Text>
              <BorderlessButton onPress={addNewScheduleItem}>
                <Text style={styles.newTime}>+ Novo</Text>
              </BorderlessButton>
            </View>
            <View style={styles.lineSeparator} />

            {scheduleItems.map((item, i) => {
              return (
                <View key={i}>
                  <Text style={styles.dataLabel}>Dia da semana</Text>
                  <TextInput
                    style={styles.dataInput}
                    placeholder="Geografia"
                    maxLength={250}
                    placeholderTextColor="#6A6180"
                    multiline
                  />
                  <View style={styles.hoursSelectTitle}>
                    <Text style={styles.dataLabel}>Das</Text>
                    <Text style={styles.dataLabel}>Ate</Text>
                  </View>
                  <View style={styles.hoursSelectContainer}>
                    <TextInput
                      style={styles.hourInputContainer}
                      placeholder="09:00"
                      maxLength={2}
                      placeholderTextColor="#6A6180"
                      keyboardType="number-pad"
                    />
                    <TextInput
                      style={styles.hourInputContainer}
                      placeholder="15:00"
                      maxLength={2}
                      placeholderTextColor="#6A6180"
                      keyboardType="number-pad"
                    />
                  </View>
                  <RectButton
                    onPress={removeScheduleItem}
                    style={{ justifyContent: "center", flexDirection: "row" }}
                  >
                    <Text style={styles.deleteTime}>- Remover</Text>
                  </RectButton>
                </View>
              );
            })}

            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.loginButton} onPress={handlePressSave}>
                {loading ? (
                  <PacmanIndicator
                    color="white"
                    size={50}
                    animating={loading}
                  />
                ) : (
                  <Text style={styles.loginButtonText}>Salvar Alteracoes</Text>
                )}
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
