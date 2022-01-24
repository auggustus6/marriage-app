import { NativeBaseProvider } from 'native-base';
import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider, useTheme } from 'styled-components/native';
import theme from '../global/styles/theme';
import { AlertProvider } from './useAlert';
import { AuthProvider } from './useAuth';
import { AxiosProvider } from './useAxios';
import { MarriageProvider } from './useMarriage';
import { MuralProvider } from './useMural';
import { UserProvider } from './useUser';

type GlobalContextProps = {
    children: React.ReactNode;
}

export default function GlobalContext({ children }: GlobalContextProps) {
    return (
        <NativeBaseProvider>
            <ThemeProvider theme={theme}>
                <AlertProvider>
                    <StatusBar translucent backgroundColor={theme.colors.primary} />
                    <AxiosProvider>
                        <AuthProvider>
                            <UserProvider>
                                <MarriageProvider>
                                    <MuralProvider>
                                        {children}
                                    </MuralProvider>
                                </MarriageProvider>
                            </UserProvider>
                        </AuthProvider>
                    </AxiosProvider>
                </AlertProvider>
            </ThemeProvider>
        </NativeBaseProvider>
    );
}


