import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
    Container,
    ListCards
} from './styles';
import {  MarriageProps, useMarriage } from "../../hooks/useMarriage";
import CardSelectMarried from "./components/CardSelectMarried";
import CustomInput from "../../components/Form/CustomInput";


const SelectedMarriagePage = () => {
    const { loadAllMarriages, marriages, loading, handleSignInWithCode } = useMarriage();
    const [filter, setFilter] = useState("");
    const [marriagesFiltered, setMarriagesFiltered] = useState<MarriageProps[]>([]);
    let mounted = true; 

    useEffect(() => {
         loadAllMarriages();
    }, []);

    const handleFilterMarriages = useCallback((text) => {
        setFilter(text);
        if (filter.length > 3) {
            setMarriagesFiltered(marriages.filter(marriage => {
                return marriage.code.toLowerCase().includes(filter.toLowerCase());
            }));
        }
    }, [filter]);


    const memoMarriagesData = useMemo(() => {
        if(filter) return marriagesFiltered;
        return marriages;
    }, [filter, marriages]);

    const handleSelectMarriaged = async (codeMarriaged: string) => {
        try {
            await handleSignInWithCode(codeMarriaged);
        }catch(err){
            
        }
    }

    return (
        <Container>
            <ListCards<any>
                data={memoMarriagesData}
                ListHeaderComponent={<CustomInput onChangeText={handleFilterMarriages} value={filter} placeholder="Encontre o seu casamento pelo nome"/>}
                keyExtractor={(item: MarriageProps) => String(item.id)}
                renderItem={({ item }: any) => <CardSelectMarried key={item.id} {...item} handleSelectMarriaged={handleSelectMarriaged} />}
                showsVerticalScrollIndicator={false}
                refreshing={loading}
                onRefresh={loadAllMarriages}
            />
        </Container>
    )
}

export default SelectedMarriagePage


