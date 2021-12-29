import React from "react";
import { createContext } from "react";
import axios, {AxiosInstance} from "axios";
import { useAuth } from "./useAuth";
import { useToken } from "./useToken";

type AxiosProps = {
    api:AxiosInstance
}

export const AxiosContext = createContext({} as AxiosProps);

export const AxiosProvider: React.FC = ({ children }) => {

    const api = axios.create({
        baseURL: "http://192.168.15.6:4000",
    });

    api.interceptors.request.use(
        async (config) => {
            const token = await useToken();
            const authentication = token ? `Bearer ${token}` : '';
            config.headers!['Authorization'] = authentication;
            return config;
        },
        async (error) => {
            return Promise.reject(error)
        },
    );

    api.interceptors.response.use(
        async (config) => {
            return config;
        },
        async (error) => {
            return Promise.reject(error)
        },
    );

    return (
        <AxiosContext.Provider value={{api}}>
            {children}
        </AxiosContext.Provider>
    )
}





