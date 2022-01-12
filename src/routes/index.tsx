import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useAuth } from '../hooks/useAuth';
import AuthRoutes from './authRoutes/index.routes';
import GlobalRoutes from './globalRoutes/index.routes';
import LoadingMarriage from '../components/LoadingMarriage';
import { useMarriage } from '../hooks/useMarriage';
import { navigationRef } from './rootNavigation';

const Routes = () => {
    const { loading: loadingAuth, auth } = useAuth();
    const { loading } = useMarriage();

    if (loadingAuth || loading) return <LoadingMarriage />;

    return (
        <NavigationContainer ref={navigationRef}>
            {auth?.signed ? <GlobalRoutes /> : <AuthRoutes />}
        </NavigationContainer>
    );
}

export default Routes;