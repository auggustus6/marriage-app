import 'react-native-reanimated';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './src/global/styles/theme';
import { NativeBaseProvider } from 'native-base';
import { MarriageProvider } from './src/hooks/useMarriage';
import Routes from './src/routes';
import { AuthProvider } from './src/hooks/useAuth';

export default function App() {
  return (
    <NativeBaseProvider>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <MarriageProvider>
            <Routes />
          </MarriageProvider>
        </AuthProvider>
      </ThemeProvider>
    </NativeBaseProvider>
  );
}


