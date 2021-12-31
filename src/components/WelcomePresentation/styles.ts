import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";


export const Presentation = styled.View`
      ${({ theme }) => css``}
`;

export const Welcome = styled.Text`
      ${({ theme }) => css`
      font-size:${RFValue(18)}px;
      color:${theme.colors.white};
      text-align:center;
      font-weight:bold;
      margin-bottom:8px;
    `}
`;

export const Title = styled.Text`
      ${({ theme }) => css`
      font-size:${RFValue(18)}px;
      color:${theme.colors.white};
      justify-content: center;
      align-items: center;
      text-align:center;
    `}
`;
