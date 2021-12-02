import styled, { css } from "styled-components/native";


export const Container = styled.View`
  ${({ theme }) => css`
        flex-direction: row;
        align-items: center;
        justify-content: center;
    `}
`;

export const Input = styled.TextInput`
  ${({ theme }) => css`
      width:100%;
      padding:10px;
      border-bottom-width: 1;
      border-bottom-color: ${theme.colors.text};
    `}
`;
