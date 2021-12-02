import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";


export const Container = styled(RectButton)`
  ${({ theme }) => css`
        background:#eeee;
        border-radius:8px;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding:8px;
        min-height:120px;
    `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
       font-size:${RFValue(12)}px;
       text-align:center;
       color:#333;
    `}
`;

