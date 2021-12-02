import {useAsyncStorage} from '@react-native-async-storage/async-storage';

export const useToken = async () => {
    const token = await useAsyncStorage('@Marriage_Token').getItem();
    if(token){
        return token;
    }
    return null;
}