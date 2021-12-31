import styled, { css } from "styled-components/native";


export const Container = styled.View`
  ${({ theme }) => css`
        flex:1;
        background: ${theme.colors.primary};
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

export const ContainerButton = styled.View`
  ${({ theme }) => css`
        margin:20px 0px;
    `}
`;
