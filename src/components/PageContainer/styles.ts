import styled, { css } from "styled-components/native";
import { Platform, StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  ${({ theme }) => css`
        flex:1;
        padding-top: ${Platform.OS === 'android' ? StatusBar.currentHeight : 0}px;
        background: ${theme.colors.white};
    `}
`;

export const Header = styled.View`
  ${({ theme }) => css`
      padding:20px 20px;
      padding-bottom:5px;
      height:${RFValue(20)}px;

      align-items: center;
      flex-direction: row;
      justify-content: space-between;
    `}
`;

export const Content = styled.ScrollView`
  ${({ theme }) => css`
      margin-top:40px;
      flex:1;
    `}
`;
