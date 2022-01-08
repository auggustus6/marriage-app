import 'react-native-reanimated';
import React from 'react';
import Routes from './src/routes';
import { ThemeProvider } from 'styled-components';
import { NativeBaseProvider } from 'native-base';
import { MarriageProvider } from './src/hooks/useMarriage';
import { AuthProvider } from './src/hooks/useAuth';
import { MuralProvider } from './src/hooks/useMural';
import { AxiosProvider } from './src/hooks/useAxios';
import theme from './src/global/styles/theme';

export default function App() {

  return (
    <NativeBaseProvider>
      <ThemeProvider theme={theme}>
        <AxiosProvider>
          <AuthProvider>
            <MarriageProvider>
              <MuralProvider>
                <Routes />
              </MuralProvider>
            </MarriageProvider>
          </AuthProvider>
        </AxiosProvider>
      </ThemeProvider>
    </NativeBaseProvider>
  );
}


