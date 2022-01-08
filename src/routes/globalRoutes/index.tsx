import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Code from '../../pages/code';
import Account from '../../pages/account';
import MainRoutes from '../mainRoutes';
import { useMarriage } from '../../hooks/useMarriage';
import CapturePhoto from '../../pages/photos/CapturePhoto';
import PixPage from '../../pages/payments/pix';

export type GlobalRoutesParams = {
    Account: undefined;
    Code: undefined;
    CapturePhoto: undefined;
    Pix: undefined;
    Loading: undefined;
    Main: undefined;
};

const Stack = createNativeStackNavigator<GlobalRoutesParams>();

const GlobalRoutes = () => {
    const { marriage } = useMarriage();

    return (
        <Stack.Navigator>
            {marriage?.id &&
                <>
                    <Stack.Group>
                        <Stack.Screen
                            options={{ headerShown: false }}
                            name="Main"
                            component={MainRoutes}
                        />
                    </Stack.Group>
                    <Stack.Group screenOptions={{ presentation: 'modal' }}>
                        <Stack.Screen
                            options={{ headerShown: false }}
                            name="CapturePhoto"
                            component={CapturePhoto} />
                        <Stack.Screen
                            name="Pix"
                            options={{ headerTitle: "Gravata do Noivo" }}
                            component={PixPage} />
                    </Stack.Group>
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
                        options={{
                            header: () => null,
                        }}
                        component={Code} />
                </>
            )}

        </Stack.Navigator>
    );
}

export default GlobalRoutes;