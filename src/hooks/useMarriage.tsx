import React, { useEffect } from 'react';
import { AxiosResponse } from "axios";
import { createContext, useContext, useState } from "react";
import { database } from "../databases";
import { Marriage } from "../databases/model/Marriage";
import { useAxios } from './useAxios';
import { useUser } from './useUser';

type MarriageContextProps = {
    marriage: MarriageProps;
    marriages: MarriageProps[];
    code: string;
    loading: boolean;
    loadAllMarriages: () => Promise<void>;
    handleSignInWithCode: (code: string) => Promise<void>
    resetContext: () => void;
}

type MarriageProviderProps = {
    children: React.ReactNode;
}

export type MarriageProps = {
    id: number;
    marriage_id?: number;
    date: string;
    code: string;
    fiancee: string;
    engaged: string;
    isActive: boolean;
    couple_photo?: string;
    created_by: number;
    created_at: string;
    update_at: string;
}

type PayloadMarriageProps = {
    payload: MarriageProps
    statusCode: number;
}

type PayloadAllMarriagesProps = {
    payload: MarriageProps[]
    statusCode: number;
}

const MarriageContext = createContext({} as MarriageContextProps);

export const MarriageProvider = ({ children }: MarriageProviderProps) => {
    const [code, setCode] = useState("");
    const [loading, setLoading] = useState(false);
    const [marriage, setMarriage] = useState<MarriageProps>({} as MarriageProps);
    const [marriages, setMarriages] = useState<MarriageProps[]>([]);

    const { api } = useAxios();
    const { user, loadUserByIdAndLocalId } = useUser();

    const resetContext = () => {
        setMarriage({} as MarriageProps);
    }

    useEffect(() => {
        async function loadMarriageDataOffLine() {
            setLoading(true);
            const marriageCollection = database.get<Marriage>('marriage');
            const response = await marriageCollection.query().fetch();

            if (response.length > 0) {
                const marriageData = response[0] as unknown as MarriageProps;
                setMarriage(marriageData);
            }
            setLoading(false);
        }
        loadMarriageDataOffLine();
    }, []);


    const loadAllMarriages = async () => {
        try {
            const response = await api.get('/marriage');
            const { data } = response;
            setMarriages(data);
        } catch (err:any) {
            throw new Error(err);
        }
    }

    const handleSignInWithCode = async (code: string) => {
        try {
            setLoading(true);
            const response: AxiosResponse<PayloadMarriageProps> = await api.get(`/marriage/find/${code}`);
            if (response) {
                const marriageResponse = response.data.payload;
                database.write(async () => {
                    await database.get<Marriage>('marriage').create(marriage => {
                        marriage.marriage_id = marriageResponse.id;
                        marriage.fiancee = marriageResponse.fiancee;
                        marriage.engaged = marriageResponse.engaged;
                        marriage.date = marriageResponse.date;
                        marriage.code = marriageResponse.code;
                        marriage.created_by = marriageResponse.created_by;
                        marriage.couple_photo = marriageResponse.couple_photo ?? null;
                    });
                });
                setMarriage({
                    ...marriageResponse,
                    marriage_id: marriageResponse.id
                });
                //TODO: LOAD DATA USER WHEN CHANGE MARRIAGE
                await loadUserByIdAndLocalId(user.user_id!, String(user.id));
            }
            setLoading(false);

        } catch (err: any) {
            setLoading(false);
            throw new Error(err);
        }
    }

    return (
        <MarriageContext.Provider value={{ code, marriage, marriages, loadAllMarriages,  handleSignInWithCode, resetContext, loading }}>
            {children}
        </MarriageContext.Provider>
    )
}

export const useMarriage = () => {
    const context = useContext(MarriageContext);

    return context;
}