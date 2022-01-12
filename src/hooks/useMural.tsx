import React from 'react';
import { createContext, useContext, useState } from "react";
import { User } from '../databases/model/User';
import { AxiosContext, useAxios } from './useAxios';
import { useMarriage } from './useMarriage';
import { useUser } from './useUser';

type MuralContextProps = {
    mural: MuralProps;
    murals: MuralProps[];
    loading: boolean;
    resetContext: () => void;
    loadMural: (idMarriage: number) => Promise<void>;
    handleAddComment: (comment: string, idMural: number) => Promise<void>;
    handleRemoveComment: (idComment: number, mural_id: number) => Promise<void>;
    handleAddMural: (file: any, description: string) => Promise<void>;
    handleToggleLike: (idMural: number) => Promise<void>;
}

type MuralProviderProps = {
    children: React.ReactNode;
}


export type CommentsProps = {
    user_id: number;
    mural_id: number;
    description: string;
    id: number;
    created_at: string;
    update_at: string;
    user: User;
}

export type MuralProps = {
    id: number;
    user_id: string;
    marriage_id: string;
    picture: string;
    description: string;
    likes: string[];
    comments: CommentsProps[];
    created_at: string;
    update_at: string;
}

type PayloadMuralProps = {
    data: {
        payload: MuralProps[];
        statusCode: number;
    }
}

const MuralContext = createContext({} as MuralContextProps);


export const MuralProvider = ({ children }: MuralProviderProps) => {
    const [loading, setLoading] = useState(false);
    const [mural, setMural] = useState<MuralProps>({} as MuralProps);
    const [murals, setMurals] = useState<MuralProps[]>([]);

    const { api } = useAxios();
    const { marriage } = useMarriage();
    const { user } = useUser();

    const loadMural = async (idMarriage: number) => {
        try {
            setLoading(true);
            const response: PayloadMuralProps = await api.get(`/mural/${idMarriage}`);
            setMurals(response.data.payload);
            setLoading(false);
        } catch (err) {
            setLoading(false);
            throw new Error(JSON.stringify(err));
        }
    }

    // LIKES
    const handleToggleLike = async (idMural: number) => {
        try {
            setLoading(true);
            const response: any = await api.patch(`/mural/likes/${idMural}`);

            setMurals(murals.map(mural => {
                if (mural.id == idMural) {
                    return {
                        ...mural,
                        likes: response.data.payload.likes
                    }
                }
                return mural;
            }));

            setLoading(false);
        } catch (err) {
            setLoading(false);
            throw new Error(JSON.stringify(err));
        }
    }

    const handleAddMural = async (file: any, description: string) => {
        setLoading(true);
        try {
            const formData = new FormData();
            formData.append('file', file);
            formData.append('description', description);
            formData.append('user_id', String(user.user_id ?? user.id));
            formData.append('marriage_id', String(marriage.marriage_id));
            const response: any = await api.post(`/mural/upload`, formData);
            setMurals((prevState: MuralProps[]) => [...prevState, response.data.payload]);
            setLoading(false);
        } catch (err) {
            setLoading(false);
            throw new Error(JSON.stringify(err));

        }
    }

    // COMMENTS
    const handleAddComment = async (comment: string, idMural: number) => {
        try {
            setLoading(true);
            const dataComment = {
                user_id: user.user_id,
                mural_id: idMural,
                description: comment
            }
            const response: any = await api.post(`/comments`, dataComment);

            const dataMurals = murals.map(mural => {
                if (mural.id === response.data.payload.mural_id) {
                    mural.comments.unshift({
                        ...response.data.payload,
                        user: {
                            name: user.name
                        }
                    });
                }
                return mural;
            });

            setMurals(dataMurals);
            setLoading(false);
        } catch (err) {
            setLoading(false);
            throw new Error(JSON.stringify(err));
        }
    }

    const handleRemoveComment = async (idComment: number, mural_id: number) => {
        try {
            setLoading(true);

            await api.delete(`/comments/${idComment}`);
            const dataMurals = murals.map(mural => {
                if (mural.id === mural_id) {
                    mural.comments = mural.comments.filter(comment => comment.id !== idComment);
                }
                return mural;
            });
            setMurals(dataMurals);
            setLoading(false);
        } catch (err) {
            setLoading(false);
            throw new Error(JSON.stringify(err));
        }
    }

    const resetContext = () => {
        setMural({} as MuralProps);
    }

    return (
        <MuralContext.Provider value={{ mural, murals, loading, resetContext, loadMural, handleAddComment, handleRemoveComment, handleAddMural, handleToggleLike }}>
            {children}
        </MuralContext.Provider>
    )
}

export const useMural = () => {
    const context = useContext(MuralContext);

    return context;
}