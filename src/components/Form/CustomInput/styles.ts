import { TextInput } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

type LabelProps = {
  labelColor?:string;
}


export const Container = styled.View`
  ${({ theme }) => css`
    `}
`;

export const Label = styled.Text<LabelProps>`
  ${({ theme, labelColor }) => css`
      margin-bottom:10px;
      font-size:${RFValue(18)}px;
      font-weight: bold;
      color:${labelColor ? labelColor : theme.colors.text};
    `}
`;


export const Input = styled.TextInput`
  ${({ theme }) => css`
      background:${theme.colors.white};
      padding:10px;
      margin-bottom:20px;
      border-radius:5px;
      background-color: #eee;
    `}
`;

