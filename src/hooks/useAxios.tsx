import React, { useContext, useState, createContext } from "react";
import axios, {AxiosInstance} from "axios";
import { useToken } from "./useToken";

type AxiosProps = {
    api:AxiosInstance;
    error: boolean;
}

export const AxiosContext = createContext({} as AxiosProps);

export const AxiosProvider: React.FC = ({ children }) => {
    const [error, setError] = useState(false);

    const api = axios.create({
        // baseURL: "https://api-marriage.herokuapp.com",
        baseURL: "http://192.168.15.6:4000",
    });

    api.interceptors.request.use(
        async (config) => {
            const token = await useToken();
            const authentication = token ? `Bearer ${token}` : '';
            config.headers!['Authorization'] = authentication;
            if(error) setError(false);
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
            if(error) setError(false);
            return Promise.reject(error)
        },
    );

    return (
        <AxiosContext.Provider value={{api, error}}>
            {children}
        </AxiosContext.Provider>
    )
}

export const useAxios = () => {
    return useContext(AxiosContext);
}





