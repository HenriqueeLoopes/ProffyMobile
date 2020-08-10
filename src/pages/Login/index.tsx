import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  BorderlessButton,
  RectButton,
  TextInput,
  TouchableOpacity,
} from "react-native-gesture-handler";
import CheckBox from "@react-native-community/checkbox";

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
  return (
    <KeyboardAvoidingView style={styles.container}>
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
          <RectButton>
            <Text style={styles.criarContaText}>Criar uma conta</Text>
          </RectButton>
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
            <BorderlessButton
              onPress={() => setsecurePasswordInput(!securePasswordInput)}
            >
              <Image
                style={{ tintColor: "#8257E5" }}
                source={
                  securePasswordInput ? showPasswordIcon : hidePasswordIcon
                }
              />
            </BorderlessButton>
          </View>
        </View>

        <View style={styles.bottomLogin}>
          <CheckBox
            disabled={false}
            value={remebemberMe}
            onValueChange={() => setremebemberMe(!remebemberMe)}
          />
          <View style={styles.remebemberMeAndLostPassword}>
            <Text style={styles.remebemberMeAndLostPasswordText}>
              Lembrar-me
            </Text>
            <RectButton>
              <Text style={styles.remebemberMeAndLostPasswordText}>
                Esqueci minha senha
              </Text>
            </RectButton>
          </View>
        </View>

        <View style={styles.loginButtonContainer}>
          <TouchableOpacity
            style={validated ? styles.loginButtonSelected : styles.loginButton}
            onPress={handlePressLogin}
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
