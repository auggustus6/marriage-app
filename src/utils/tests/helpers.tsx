import React from 'react';
import { render, RenderOptions } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';
import theme from '../../global/styles/theme';
import 'jest-styled-components/native';

export const AllTheProviders: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  )
};

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'queries'>,
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react-native';

export { customRender as render };
