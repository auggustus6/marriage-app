import styled, { css } from "styled-components/native";
import { Platform, StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.SafeAreaView`
  ${({ theme }) => css`
        flex:1;
        background: ${theme.colors.white};
    `}
`;



export const Content = styled.ScrollView`
  ${({ theme }) => css`
      flex:1;
    `}
`;
