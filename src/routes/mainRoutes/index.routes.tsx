import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../pages/home';
import Mural from '../../pages/mural';
import GodParents from '../../pages/godParents';
import { useTheme } from 'styled-components';
import { Feather } from '@expo/vector-icons';
import AccountRoutes from '../account/index.routes';


export type MainRoutesParamList = {
    Home: undefined;
    Mural: undefined;
    Padrinhos: undefined;
    AccountStack: undefined;
    PhotosStack: undefined;
};

const Tab = createBottomTabNavigator<MainRoutesParamList>();

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
                name="Padrinhos"
                component={GodParents} />

            <Tab.Screen
                options={{
                    tabBarLabel: "Conta",
                    tabBarIcon: ({ focused }) => <Feather size={24} name="settings" color={focused ? theme.colors.primary : theme.colors.text_dark} />
                }}
                name="AccountStack"
                component={AccountRoutes} />

        </Tab.Navigator>
    );
}

export default MainRoutes;