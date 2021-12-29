import styled, { css } from "styled-components/native";


export const Container = styled.View`
  ${({ theme }) => css`
        flex-direction: row;
        align-items: center;
        justify-content: center;
    `}
`;

export const Input = styled.TextInput.attrs({
  borderBottomColor: "#ccc",
  borderBottomWidth:1,
})`
  ${({ theme }) => css`
      width:100%;
      padding:10px;
    `}
`;
