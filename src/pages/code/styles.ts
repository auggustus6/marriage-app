import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";


export const Container = styled.View`
  ${({ theme }) => css`
        flex:1;
        background: ${theme.colors.secondary};
        align-items: center;
        justify-content: center;
        padding:0px 20px;
    `}
`;

export const ContainerForm = styled.View`
  ${({ theme }) => css`
        align-self: stretch;
        margin:60px 0px;
    `}
`;


export const Text = styled.Text`
  ${({ theme }) => css`
        align-self:center;
        margin:20px 0px;
        color:${theme.colors.white};
        font-size:${RFValue(22)}px;
        font-weight:bold;
    `}
`;

