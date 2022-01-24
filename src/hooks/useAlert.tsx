import React, { useEffect } from 'react';
import { createContext, useContext, useState } from "react";
import CustomAlert from '../components/CustomAlert';

type AlertContextProps = {
    isVisible: boolean;
    show: (message: string, type: "success" | "error") => void;
    hide: () => void;
    loading: boolean;
    message: string;
    type: "success" | "error";

}

type AlertProviderProps = {
    children: React.ReactNode;
}



const AlertContext = createContext({} as AlertContextProps);


export const AlertProvider = ({ children }: AlertProviderProps) => {
    const [loading, setLoading] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [message, setMessage] = useState("");
    const [type, setType] = useState<any>("success");


    const show = (message = "", type = "success") => {
        setMessage(message);
        setType(type);
        setIsVisible(true);
    }
    const hide = () => setIsVisible(false);

    useEffect(() => {
        if (isVisible) {
            setTimeout(() => {
                hide();
            }, 3000)
        }
    }, [isVisible])

    return (
        <AlertContext.Provider value={{
            loading,
            isVisible,
            show,
            hide,
            message,
            type
        }}>
            {isVisible && <CustomAlert message={message} type={type} />}
            {children}
        </AlertContext.Provider>
    )
}

export const useAlert = () => {
    const context = useContext(AlertContext);

    return context;
}