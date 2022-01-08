import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../pages/home';
import Mural from '../../pages/mural';
import GodParents from '../../pages/godParents';
import Code from '../../pages/code';
import Account from '../../pages/account';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GlobalRoutesParams } from '../globalRoutes';
import { useTheme } from 'styled-components';
import { Feather } from '@expo/vector-icons';


export type MainRoutesParamList = {
    Home: undefined;
    Mural: undefined;
    Padrinhos: undefined;
    AccountStack: undefined;
    PhotosStack: undefined;
};

const Tab = createBottomTabNavigator<MainRoutesParamList>();
const Stack = createNativeStackNavigator<GlobalRoutesParams>();

const AccountStack = () => {
    const theme = useTheme();

    return (
        <Stack.Navigator>
            <Stack.Screen
                options={{
                    headerShown: false
                }}
                name="Account" component={Account} />
            <Stack.Screen
                name="Code"
                options={{
                    headerTitle: "Código de Acesso",
                    headerStyle: {
                        backgroundColor: theme.colors.blackButton,
                    },
                    headerTitleStyle: {
                        color:theme.colors.primary,
                    },
                }}
                component={Code} />
        </Stack.Navigator>
    )
}

const MainRoutes = () => {
    const theme = useTheme();
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                header: () => null,
                tabBarActiveTintColor: theme.colors.primary,
                tabBarInactiveTintColor: theme.colors.text_dark,
            }}>

            <Tab.Screen
                options={{
                    tabBarIcon: ({ focused }) => <Feather size={24} name="home" color={focused ? theme.colors.primary : theme.colors.text_dark} />
                }}
                name="Home"
                component={Home} />
            <Tab.Screen
                options={{
                    tabBarIcon: ({ focused }) => <Feather size={24} name="list" color={focused ? theme.colors.primary : theme.colors.text_dark} />
                }}
                name="Mural"
                component={Mural} />
            <Tab.Screen
                options={{
                    tabBarIcon: ({ focused }) => <Feather size={24} name="users" color={focused ? theme.colors.primary : theme.colors.text_dark} />
                }}
                name="Padrinhos" component={GodParents} />

            <Tab.Screen
                options={{
                    tabBarLabel: "Conta",
                    tabBarIcon: ({ focused }) => <Feather size={24} name="settings" color={focused ? theme.colors.primary : theme.colors.text_dark} />
                }}
                name="AccountStack" component={AccountStack} />

        </Tab.Navigator>
    );
}

export default MainRoutes;