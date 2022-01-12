import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";


export const Container = styled(RectButton)`
  ${({ theme }) => css`
        flex:1;
        flex-direction:row;
        align-items:center;
        border-bottom-width:1px;
        border-bottom-color: ${theme.colors.shape};
        background:#eee;
        padding:8px;
    `}
`;

export const ContainerContent = styled.View`
  ${({ theme }) => css`
      flex-direction:column;
      align-items:flex-start;
      margin-left:8px;
    `}
`;


export const Text = styled.Text<{title?:boolean}>`
  ${({ theme, title }) => css`
      font-size:${title ? RFValue(16): RFValue(12)}px;
      color:${title ? theme.colors.text_dark : theme.colors.text};
    `}
`;

