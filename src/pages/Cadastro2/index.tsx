import React, { useState, useEffect } from "react";
import { View, Text, KeyboardAvoidingView, Platform, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

import showPasswordIcon from "../../assets/images/icons/show-password.png";
import hidePasswordIcon from "../../assets/images/icons/hide-password.png";

import styles from "./styles";

function Cadastro2() {
  const [securePasswordInput, setsecurePasswordInput] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validated, setValidated] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    if (email.length >= 5 && password.length >= 5) {
      setValidated(true);
    } else {
      setValidated(false);
    }
  }, [email]);
  useEffect(() => {
    if (email.length >= 5 && password.length >= 5) {
      setValidated(true);
    } else {
      setValidated(false);
    }
  }, [password]);

  function handlePressNext() {
    navigation.navigate('SucessSignUp');
    return;
  }
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS == "ios" ? "padding" : undefined}
    >
      <View style={styles.headerTop}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="ios-arrow-round-back" size={30} />
        </TouchableOpacity>
        <Text style={styles.nextPageSection}>
          .<Text style={styles.currentPageSection}>.</Text>
        </Text>
      </View>

      <View style={styles.bottomBar}>
        <View style={styles.topText}>
          <Text style={styles.title}>02. Email e Senha</Text>
        </View>

        <View style={styles.InputContainer}>
          <View style={styles.inputText}>
            <TextInput
              style={{ flex: 1 }}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="E-mail"
              placeholderTextColor="#9C98A6"
              maxLength={38}
              value={email}
              onChangeText={(text) => setEmail(text)}
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
              placeholder="Senha"
              placeholderTextColor="#9C98A6"
              maxLength={30}
              secureTextEntry={securePasswordInput}
              value={password}
              onChangeText={(text) => setPassword(text)}
              returnKeyType="done"
            />
            <TouchableOpacity
              onPress={() => setsecurePasswordInput(!securePasswordInput)}
            >
              <Image
                style={{ tintColor: "#8257E5" }}
                source={
                  securePasswordInput ? showPasswordIcon : hidePasswordIcon
                }
              />
            </TouchableOpacity>
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
              Concluir cadastro
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

export default Cadastro2;
