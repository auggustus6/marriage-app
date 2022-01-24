import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

type ContainerProps = {
  type: "success" | "error";
}

export const Container = styled.View<ContainerProps>`
  ${({ theme, type }) => css`
        background-color: ${type === "success" ? theme.colors.success : theme.colors.attention};
        padding:8px;
        bottom:0;
        position:absolute;
        z-index:9;
        width:100%;
    `}
`;

export const Text = styled.Text<ContainerProps>`
  ${({ theme, type }) => css`
        color: ${theme.colors.white};
        font-size:${RFValue(14)}px;
        text-align:center;

    `}
`;
