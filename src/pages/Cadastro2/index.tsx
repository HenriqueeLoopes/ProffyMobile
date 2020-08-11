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
import {
  PacmanIndicator
} from "react-native-indicators";

import showPasswordIcon from "../../assets/images/icons/show-password.png";
import hidePasswordIcon from "../../assets/images/icons/hide-password.png";

import styles from "./styles";
import api from "../../services/api";

interface Cadastro2 {
  name: string;
  lastname: string;
}

const Cadastro2: React.FC<Cadastro2> = (props) => {
  const [securePasswordInput, setsecurePasswordInput] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState(props.name);
  const [lastName, setLastName] = useState(props.lastname);
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
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

  async function handlePressNext() {
    if (validated) {
      setLoading(true);
      try {
        const response = await api.post(
          "/create-user",
          { email, password, name: (name + ' ' + lastName) },
          { timeout: 2000 }
        );
        if (response.status === 201) {
          setLoading(false);
          return navigation.navigate("SucessSignUp");
        }
      } catch (error) {
        setLoading(false);
        if (error.response) {
          return setError("algo deu errado ao realizar o seu cadastro ;(");
        } else if (error.request) {
          return setError(
            "estamos com problemas nos servidores, aguarde por favor ;("
          );
        }
        setError("estamos com problemas nos servidores, aguarde por favor ;(");
        return console.log(error.response);
      }
    }
    return setError("Preencha todos os campos corretamente.");
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
        {error ? (
          <View style={styles.error}>
            <Text style={styles.errorText}>{error}</Text>
          </View>
        ) : null}
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
            {loading ? (
              <PacmanIndicator color="white" size={50} animating={loading} />
            ) : (
              <Text
                style={
                  validated
                    ? styles.nextButtonTextSelected
                    : styles.nextButtonText
                }
              >
                Concluir cadastro
              </Text>
            )}
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Cadastro2;
