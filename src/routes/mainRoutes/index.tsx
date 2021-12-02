import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../pages/home';
import Mural from '../../pages/mural';
import GodParents from '../../pages/godParents';
import { Feather } from '@expo/vector-icons';
import Account from '../../pages/account';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GlobalRoutesParams } from '../globalRoutes';
import Code from '../../pages/code';


export type MainRoutesParamList = {
    Home: undefined;
    Mural: undefined;
    Padrinhos: undefined;
    AccountStack: undefined;
};

const Tab = createBottomTabNavigator<MainRoutesParamList>();
const Stack = createNativeStackNavigator<GlobalRoutesParams>();

const AccountStack = () => (
    <Stack.Navigator>
        <Stack.Screen
            options={{
                headerShown: false
            }}
            name="Account" component={Account} />
        <Stack.Screen
            name="Code"
            component={Code} />
    </Stack.Navigator>
)

const MainRoutes = () => {

    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                header: () => null,
            }}>

            <Tab.Screen
                options={{
                    tabBarIcon: () => <Feather size={28} name="home" />
                }}
                name="Home"
                component={Home} />
            <Tab.Screen
                options={{
                    tabBarIcon: () => <Feather size={28} name="list" />
                }}
                name="Mural"
                component={Mural} />
            <Tab.Screen
                options={{
                    tabBarIcon: () => <Feather size={28} name="users" />
                }}
                name="Padrinhos" component={GodParents} />

            <Tab.Screen
                options={{
                    tabBarLabel:"Conta",
                    tabBarIcon: () => <Feather size={28} name="users" />
                }}
                name="AccountStack" component={AccountStack} />

        </Tab.Navigator>
    );
}

export default MainRoutes;