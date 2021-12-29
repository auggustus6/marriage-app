import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Code from '../../pages/code';
import Account from '../../pages/account';
import MainRoutes from '../mainRoutes';
import { useMarriage } from '../../hooks/useMarriage';
import LoadingMarriage from '../../components/LoadingMarriage';
import { useAuth } from '../../hooks/useAuth';
import CapturePhoto from '../../pages/photos/CapturePhoto';

export type GlobalRoutesParams = {
    Account: undefined;
    Code: undefined;
    CapturePhoto: undefined;
    Loading: undefined;
    Main: undefined;
};

const Stack = createNativeStackNavigator<GlobalRoutesParams>();

const GlobalRoutes = () => {
    const { marriage } = useMarriage();
    const { user } = useAuth();

    return (
        <Stack.Navigator>
            {marriage?.id &&
                <>
                    <Stack.Screen
                        options={{ headerShown: false }}
                        name="Main"
                        component={MainRoutes}
                    />

                    <Stack.Screen
                        options={{ headerShown: false }}
                        name="CapturePhoto"
                        component={CapturePhoto} />
                </>
            }

            {(!marriage?.id) && (
                <>
                    <Stack.Screen
                        options={{ headerShown: false }}
                        name="Account"
                        component={Account} />

                    <Stack.Screen
                        name="Code"
                        component={Code} />
                </>
            )}

        </Stack.Navigator>
    );
}

export default GlobalRoutes;