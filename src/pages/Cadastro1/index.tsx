import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { PacmanIndicator } from "react-native-indicators";

import showPasswordIcon from "../../assets/images/icons/show-password.png";
import hidePasswordIcon from "../../assets/images/icons/hide-password.png";

import styles from "./styles";
import Cadastro2 from "../Cadastro2";

function Cadastro1() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [validated, setValidated] = useState(false);
  const [step, setStep] = useState(1);
  const navigation = useNavigation();

  useEffect(() => {
    if (name.length >= 5 && lastName.length >= 5) {
      setValidated(true);
    } else {
      setValidated(false);
    }
  }, [name]);
  useEffect(() => {
    if (name.length >= 5 && lastName.length >= 5) {
      setValidated(true);
    } else {
      setValidated(false);
    }
  }, [lastName]);

  function handlePressNext() {
    setStep(2);
    return;
  }

  if (step == 2) {
    return (
      <Cadastro2 name={name} lastname={lastName} />
    );
  } else {
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS == "ios" ? "padding" : undefined}
      >
        <View style={styles.headerTop}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="ios-arrow-round-back" size={30} />
          </TouchableOpacity>
          <Text style={styles.currentPageSection}>
            .<Text style={styles.nextPageSection}>.</Text>
          </Text>
        </View>
        <View style={styles.topBar}>
          <Text style={styles.titleText}>Crie sua conta gratuíta</Text>
          <Text style={styles.titleDescriptionText}>
            Basta preencher esses dados e você estará conosco.
          </Text>
        </View>

        <View style={styles.bottomBar}>
          <View style={styles.topText}>
            <Text style={styles.title}>01. Quem é você?</Text>
          </View>

          <View style={styles.InputContainer}>
            <View style={styles.inputText}>
              <TextInput
                style={{ flex: 1 }}
                placeholder="Nome"
                placeholderTextColor="#9C98A6"
                maxLength={40}
                value={name}
                onChangeText={(text) => setName(text)}
                returnKeyType="go"
              />
            </View>
            <View
              style={[
                styles.inputText,
                { borderTopWidth: 1, borderColor: "#E6E6F0" },
              ]}
            >
              <TextInput
                style={{ flex: 1 }}
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Sobrenome"
                placeholderTextColor="#9C98A6"
                maxLength={30}
                value={lastName}
                onChangeText={(text) => setLastName(text)}
                returnKeyType="done"
              />
            </View>
          </View>

          <View style={styles.nextButtonContainer}>
            <TouchableOpacity
              style={validated ? styles.nextButtonSelected : styles.nextButton}
              onPress={handlePressNext}
              disabled={validated ? false : true}
              activeOpacity={0.6}
            >
              <Text
                style={
                  validated
                    ? styles.nextButtonTextSelected
                    : styles.nextButtonText
                }
              >
                Proximo
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default Cadastro1;
