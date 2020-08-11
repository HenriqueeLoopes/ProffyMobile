import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import backgroundImg from "../../assets/images/icons/purble-bubbles-backgorund.png";
import logoImg from "../../assets/images/logo.png";
import showPasswordIcon from "../../assets/images/icons/show-password.png";
import hidePasswordIcon from "../../assets/images/icons/hide-password.png";

import styles from "./styles";

function Login() {
  const [securePasswordInput, setsecurePasswordInput] = useState(true);
  const [remebemberMe, setremebemberMe] = useState(false);
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

  function handlePressLogin() {
    return;
  }

  function handlePressSignUP() {
    return navigation.navigate("Cadastro1");
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS == "ios" ? "padding" : undefined}
    >
      <View style={styles.topBar}>
        <ImageBackground
          source={backgroundImg}
          style={styles.banner}
          resizeMode="contain"
        >
          <Image source={logoImg} style={styles.logoImg} resizeMode="contain" />
          <Text style={styles.logoText}>Sua plataforma de estudos online.</Text>
        </ImageBackground>
      </View>

      <View style={styles.bottomBar}>
        <View style={styles.topLogin}>
          <Text style={styles.fazerLoginText}>Fazer Login</Text>
          <TouchableOpacity onPress={handlePressSignUP}>
            <Text style={styles.criarContaText}>Criar uma conta</Text>
          </TouchableOpacity>
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
              activeOpacity={0.6}
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

        <View style={styles.bottomLogin}>
          <View style={styles.remebemberMeAndLostPassword}>
            <TouchableOpacity onPress={() => setremebemberMe(!remebemberMe)}>
              <MaterialCommunityIcons
                style={{ color: remebemberMe ? "#04D361" : "#000" }}
                name={remebemberMe ? "check-circle" : "check-circle-outline"}
                size={26}
              />
            </TouchableOpacity>
            <Text style={[styles.remebemberMeAndLostPasswordText, { marginLeft: -65 }]}>
              Lembrar-me
            </Text>
            <TouchableOpacity>
              <Text style={styles.remebemberMeAndLostPasswordText}>
                Esqueci minha senha
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.loginButtonContainer}>
          <TouchableOpacity
            style={validated ? styles.loginButtonSelected : styles.loginButton}
            onPress={handlePressLogin}
            disabled={validated ? false : true}
          >
            <Text
              style={
                validated
                  ? styles.loginButtonTextSelected
                  : styles.loginButtonText
              }
            >
              Entrar
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

export default Login;
