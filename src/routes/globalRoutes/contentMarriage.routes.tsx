import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainRoutes from '../mainRoutes/index.routes';
import CapturePhoto from '../../pages/photos/CapturePhoto';
import PixPage from '../../pages/payments/pix';

export type ContentMarriageParams = {
    CapturePhoto: undefined;
    Pix: undefined;
    Main: undefined;
};

const Stack = createNativeStackNavigator<ContentMarriageParams>();

const ContentMarriageRoutes = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen
                options={{ headerShown: false }}
                name="Main"
                component={MainRoutes}
            />
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

        </Stack.Navigator>
    );
}

export default ContentMarriageRoutes;