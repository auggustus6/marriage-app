import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Code from '../../pages/code';
import SignIn from '../../pages/auth/SignIn';
import ChoiceSign from '../../pages/auth/ChoiceSign';
import SignUp from '../../pages/auth/SignUp';

export type AuthRoutesParamList = {
    ChoiceSign: undefined;
    SignIn: undefined;
    SignUp: undefined;
};

const Stack = createNativeStackNavigator<AuthRoutesParamList>();

const AuthRoutes = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                options={{ header: () => null }}
                name="ChoiceSign"
                component={ChoiceSign} />

            <Stack.Screen
                options={{ header: () => null }}
                name="SignIn"
                component={SignIn} />

            <Stack.Screen
                options={{ header: () => null }}
                name="SignUp"
                component={SignUp} />
        </Stack.Navigator>
    );
}

export default AuthRoutes;