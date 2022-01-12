import React from 'react';
import { useMarriage } from '../../hooks/useMarriage';
import ContentMarriageRoutes from './contentMarriage.routes';
import NotContetMarriageRoutes from './notContentMarriage.routes';

export type GlobalRoutesParams = {
    Account: undefined;
    Code: undefined;
    CapturePhoto: undefined;
    Pix: undefined;
    Loading: undefined;
    Main: undefined;
};

const GlobalRoutes = () => {
    const { marriage } = useMarriage();

    return marriage?.id ? <ContentMarriageRoutes /> :<NotContetMarriageRoutes />
      
}

export default GlobalRoutes;