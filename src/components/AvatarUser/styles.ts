import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";


export const Container = styled.View`
  ${({ theme }) => css`
        width:${RFValue(40)}px;
        height:${RFValue(40)}px;
        border-radius:${RFValue(20)}px;
        background:${theme.colors.secondary};

        align-items: center;
        justify-content: center;
    `}
`;
