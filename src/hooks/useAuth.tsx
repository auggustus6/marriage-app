import React, { useContext, useState } from "react";
import { useEffect, createContext } from "react";
import  { AxiosResponse } from "axios";
import { AxiosContext } from "./useAxios";
import * as AuthSession from 'expo-auth-session';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { database } from "../databases";
import { User as UserModel } from "../databases/model/User";

export type User = {
  id: string;
  user_id: number;
  name: string;
  email: string;
  phoneNumber: string;
  isAdmin: boolean;
  isActive: boolean;
  type: 'NORMAL' | 'GOOGLE';
  marriages: any;
  created_at: string;
  update_at: string;
}

type Auth = {
  access_token: string;
  signed: boolean;
}

type ResponseAuthLogin = {
  access_token: string;
  user: User;
}

type ResponseUserData = {
  payload: User;
  statusCode: number;
}

type AuthContextProps = {
  auth: Auth | null;
  user: User;
  loading: boolean;
  loadUserByIdAndLocalId: (userId: number, idUserLocal: string) => Promise<void>;
  handleLogin: (username: string, password: string) => Promise<void>;
  handleCreateAccount: (data: any) => Promise<void>;
  handleResetPassword: (username: string) => Promise<void>;
  handleUpdatePassword: (username: string, password: string) => Promise<void>;
  handleLogout: () => Promise<void>;
  resetContext: () => void;
  handleSignWithGoogle: () => Promise<void>;
};

const AuthContext = createContext({} as AuthContextProps);

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [auth, setAuth] = useState<Auth>({} as Auth);
  const [user, setUser] = useState<User>({} as User);
  const [loading, setLoading] = useState(false);

  const { api, error } = useContext(AxiosContext);

  useEffect(() => {
    if(error){
      async function validateUserLogged(){
        await
        useAsyncStorage('@Marriage_Token')
          .removeItem();
        setAuth({} as Auth);
        setUser({} as User);
      }

      validateUserLogged();
    }
  }, [error])


  useEffect(() => {
    async function loadStoragedData() {
      setLoading(true);
      try {
        const response = await database.get<UserModel>('user').query().fetch();
        const userData = response[0] as unknown as User;
        setUser(userData);
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    }
    loadStoragedData();
  }, []);


  const loadUserByIdAndLocalId = async (userId: number, idUserLocal:string) => {
    setLoading(true);
    try {
      const response: AxiosResponse<ResponseUserData> = await api.get(`/user/${userId}`);

      if (response.data) {
        const userResponse = response.data.payload;

        database.write(async () => {
          const userModel = await database.get<UserModel>('user').find(idUserLocal);
          await userModel.update((user) => {
            user.user_id = Number(userResponse.id);
            user.name = userResponse.name;
            user.email = userResponse.email;
            user.phoneNumber = userResponse.phoneNumber;
            user.marriages = userResponse.marriages;
            user.isAdmin = userResponse.isAdmin;
          });
          setUser({
            ...userResponse,
            user_id: Number(userResponse.id),
            id: userModel.id,
          });
        });
      }
      setLoading(false);

    } catch (err) {
      setLoading(false);
      throw new Error(JSON.stringify(err));
    }
  };

  const handleSignWithGoogle = async () => {
    try {
      const CLIENT_ID = process.env.CLIENT_ID;

      const REDIRECT_URI = process.env.REDIRECT_URI;
      const RESPONSE_TYPE = "token";
      const SCOPE = encodeURI('profile email');

      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

      const response = await AuthSession.startAsync({ authUrl, returnUrl: REDIRECT_URI, showInRecents: false });

      if (response.type === 'success') {
        const res = await fetch(`https://www.googleapis.com/oauth2/v2/userinfo?alt=json&access_token=${response.params.access_token}`);
        const userInfo = await res.json();
      }

    } catch (error) {
      throw new Error(JSON.stringify(error));
    }
  }

  const handleCreateAccount = async (data: any) => {
    setLoading(true);
    try {
      const response: any = await api.post(`/user`, data);

      if (response.data) {
        await handleLogin(data.email, data.password);
      }
      setLoading(false);

    } catch (err) {
      setLoading(false);
      throw new Error(JSON.stringify(err));
    }
  };


  const handleLogin = async (username: string, password: string) => {
    setLoading(true);
    try {
      const response: AxiosResponse<ResponseAuthLogin> = await api.post(`/auth/login`, { username, password });

      if (response.data) {
        const authResponse = response.data;
        await
          useAsyncStorage('@Marriage_Token')
            .setItem(authResponse.access_token);

        database.write(async () => {
          const userModel = await database.get<UserModel>('user').create(user => {
            user.user_id = Number(authResponse.user!.id);
            user.name = authResponse.user!.name;
            user.email = authResponse.user!.email;
            user.phoneNumber = authResponse.user!.phoneNumber;
            user.marriages = authResponse.user!.marriages;
            user.isAdmin = authResponse.user!.isAdmin;
          });
          setUser({
            ...authResponse.user,
            user_id: Number(authResponse.user!.id),
            id: userModel.id,
          });
          setAuth({
            access_token: authResponse.access_token,
            signed: true
          });
          setLoading(false);
        });
      }


    } catch (err) {
      setLoading(false);
      throw new Error(JSON.stringify(err));
    }
  };


  const handleResetPassword = async (username: string) => {
    setLoading(true);
    try {
      await api.post(`user/resetPassword`, { username });
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  const handleUpdatePassword = async (username: string, password: string) => {
    setLoading(true);
    try {
      await api.post(`/user/updatePassword`, { username, password });
      await handleLogin(username, password);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await useAsyncStorage('@Marriage_Token').removeItem();
      database.write(async () => {
        await database.get('user').query().destroyAllPermanently();
        await database.get('marriage').query().destroyAllPermanently();
      });

      setAuth({
        access_token: "",
        signed: false
      });

      setUser({} as User);
    } catch (err) {
      throw new Error(JSON.stringify(err));
    }
  };

  const resetContext = () => {
    setAuth({
      access_token: "",
      signed: false
    });
  };


  const value = {
    auth,
    user,
    loading,
    loadUserByIdAndLocalId,
    handleLogin,
    handleCreateAccount,
    handleResetPassword,
    handleUpdatePassword,
    handleSignWithGoogle,
    resetContext,
    handleLogout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};

