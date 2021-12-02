import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

type CardSelected = {
  selected?: boolean;
}

export const Container = styled.View.attrs({
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.23,
  shadowRadius: 2.62,
  
  elevation: 4,
})<CardSelected>`
  ${({ theme, selected }) => css`
        background:${selected ? theme.colors.primary : theme.colors.white};
        border-radius:8px;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding:8px;
        min-height:120px;
        max-width: 120px;
    `}
`;

export const Title = styled.Text<CardSelected>`
  ${({ theme, selected }) => css`
       font-size:${RFValue(10)}px;
       color:${selected ? theme.colors.white : theme.colors.text};
    `}
`;

export const Date = styled.Text<CardSelected>`
  ${({ theme, selected }) => css`
    font-size:${RFValue(9)}px;
    color:${selected ? theme.colors.white : theme.colors.text};
    `}
`;
