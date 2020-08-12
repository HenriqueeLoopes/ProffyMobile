import React, { createContext, useState, useContext, useEffect } from "react";
import api from "../services/api";
import { AxiosResponse } from "axios";
import AsyncStorage from "@react-native-community/async-storage";

interface ResponseSignInUser {
  error: boolean;
  message: string;
  data: User;
}

interface User {
  name: string;
  avatar: string;
  bio: string;
}

interface AuthContextData {
  signed: boolean;
  user: User | null;
  SignIn(
    email: string,
    password: string,
    remebemberMe: boolean
  ): Promise<AxiosResponse<ResponseSignInUser>>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    async function loadStorageData() {
      const storagedUserAndToken = await AsyncStorage.multiGet([
        "@RNAuth:user",
        "@RNAuth:token",
      ]);
      const storagedUser = storagedUserAndToken[0][1];
      const storagedToken = storagedUserAndToken[1][1];

      if (storagedUser && storagedToken) {
        setUser(JSON.parse(storagedUser));
        api.defaults.headers.Authorization = `Baerer ${storagedToken}`;
      }
    }

    loadStorageData();
  }, []);

  async function SignIn(
    email: string,
    password: string,
    remebemberMe: boolean
  ) {
    const response = await api.post<ResponseSignInUser>(
      "/login-user",
      {
        email,
        senha: password,
      },
      { timeout: 2000 }
    );
    if (response.data.data) {
      if (remebemberMe) {
        await AsyncStorage.multiSet([
          ["@RNAuth:token", response.data.data.token || 'nao_retornou_da_api'],
          ["@RNAuth:user", JSON.stringify(response.data.data)],
        ]);
      }
      setUser(response.data.data);
      return response;
    }
    return response;
  }

  async function signOut() {
    await AsyncStorage.multiRemove(["@RNAuth:user", "@RNAuth:token"]);
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, SignIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider.");
  }

  return context;
}

export { AuthProvider, useAuth };
