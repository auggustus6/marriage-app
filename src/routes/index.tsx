import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useAuth } from '../hooks/useAuth';
import AuthRoutes from './auth';
import GlobalRoutes from './globalRoutes';
import LoadingMarriage from '../components/LoadingMarriage';
import { useMarriage } from '../hooks/useMarriage';

const Routes = () => {
    const { loading: loadingAuth, user } = useAuth();
    const { loading } = useMarriage();


    if (loadingAuth || loading) return <LoadingMarriage />;


    return (
        <NavigationContainer>
            {user?.id ? <GlobalRoutes /> : <AuthRoutes />}
        </NavigationContainer>
    );
}

export default Routes;