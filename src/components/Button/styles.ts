import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

type TextProps = {
  colorText?:string;
  transform?:'uppercase' | 'none'
}

export const Container = styled(RectButton)`
  ${({ theme }) => css`
        width:100%;
        min-height: ${RFValue(32)}px;
        border-radius:5px;
        padding:18px 16px;
    `}
`;

export const Title = styled.Text<TextProps>`
  ${({ theme,colorText, transform }) => css`
        font-size: ${RFValue(15)}px;
        color:${colorText ? colorText : theme.colors.title};
        text-transform: ${transform ? transform : 'none'};
        text-align:center;
    `}
`;
