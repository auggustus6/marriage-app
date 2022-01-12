import 'react-native-reanimated';
import React from 'react';
import Routes from './src/routes';
import GlobalContext from './src/hooks';

export default function App() {
  return (
    <GlobalContext>
      <Routes />
    </GlobalContext>
  );
}