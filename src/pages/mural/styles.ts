import styled, { css } from "styled-components/native";


export const Container = styled.View`
  ${({ theme }) => css`
        flex:1;
    `}
`;

export const FabContainer = styled.View`
  ${({ theme }) => css`
      position:relative;
  `}
`;

export const LabelButton = styled.Text`
  ${({ theme }) => css`
      color:${theme.colors.white};
    `}
`;
