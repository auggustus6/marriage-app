import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";


export const Container = styled.View`
  ${({ theme }) => css`
        flex:1;
        background: ${theme.colors.secondary};
        align-items: center;
        justify-content:center;
        padding:20px;
    `}
`;

export const Message = styled.Text`
  ${({ theme }) => css`
      font-size:${RFValue(28)}px;
      color:${theme.colors.white};
      text-align:center;
      margin-bottom:${RFValue(40)}px;
    `}
`;
