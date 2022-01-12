import React from 'react';
import Code from '../../pages/code';
import Account from '../../pages/account';
import SelectedMarriagePage from '../../pages/selectedMarriagesPage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from 'styled-components';

export type AccountRoutesParams = {
    Account: undefined;
    Code: undefined;
    SelectedMarriagePage: undefined;
};

const Stack = createNativeStackNavigator<AccountRoutesParams>();

const AccountRoutes = () => {
    const theme = useTheme();

    const optionsHeader = {
        headerTitle: "Encontre um casamento",

        headerTitleStyle: {
            color: theme.colors.text,
        },
    }
    return (
        <Stack.Navigator>
            <Stack.Screen
                options={{
                    headerShown: false
                }}
                name="Account"
                component={Account} />
            <Stack.Screen
                name="Code"
                options={optionsHeader}
                component={Code} />
            <Stack.Screen
                name="SelectedMarriagePage"
                options={{
                    headerShown: false
                }}
                component={SelectedMarriagePage} />
        </Stack.Navigator>
    )
}


export default AccountRoutes;