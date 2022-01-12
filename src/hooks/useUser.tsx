import React, { useContext, useState } from "react";
import { useEffect, createContext } from "react";
import { AxiosResponse } from "axios";
import {  useAxios } from "./useAxios";
import { database } from "../databases";
import { User as UserModel } from "../databases/model/User";
import { useAuth } from "./useAuth";

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


type ResponseUserData = {
    payload: User;
    statusCode: number;
}

type UserContextProps = {
    user: User;
    loading: boolean;
    handleResetPassword: (username: string) => Promise<void>;
    handleUpdatePassword: (username: string, password: string) => Promise<void>;
    loadUserByIdAndLocalId: (userId: number, idUserLocal: string) => Promise<void>;
    resetContext: () => void;
};

const UserContext = createContext({} as UserContextProps);

type UserProviderProps = {
    children: React.ReactNode;
};

export const UserProvider = ({ children }: UserProviderProps) => {
    const { api } = useAxios();
    const { auth } = useAuth();
    
    const [user, setUser] = useState<User>({} as User);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function loadStoragedData() {
            setLoading(true);
            try {
                const response = await database.get<UserModel>('user').query().fetch();
                if (response.length > 0) {
                    const userData = response[0] as unknown as User;
                    setUser(userData);
                }
                setLoading(false);
            } catch (err) {
                setLoading(false);
            }
        }
        loadStoragedData();
    }, [auth?.signed]);

    
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
          setLoading(false);
        } catch (err) {
          setLoading(false);
        }
      };

    const loadUserByIdAndLocalId = async (userId: number, idUserLocal: string) => {
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

    const resetContext = () => setUser({} as User);

    const value = {
        user,
        loading,
        handleResetPassword,
        handleUpdatePassword,
        loadUserByIdAndLocalId,
        resetContext,
    };

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = () => {
    const context = useContext(UserContext);

    return context;
};

