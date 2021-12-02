import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";


export const Container = styled.View`
  ${({ theme }) => css`
        flex:1;
    `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
        font-size:${RFValue(10)}px;
        color:${theme.colors.text};
    `}
`;

export const SubTitle = styled.Text`
  ${({ theme }) => css`
      font-size:${RFValue(25)}px;
        color:${theme.colors.text_dark};
    `}
`;
