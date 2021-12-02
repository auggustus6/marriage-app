import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

type TitleProps = {
  size: "large" | "small"
}

export const Container = styled.View`
  ${({ theme }) => `
        flex:1;
    `}
`;

export const Header = styled.View`
  ${({ theme }) => css`
        height:${RFPercentage(50)}px;
        background-color:${theme.colors.primary};

        justify-content: center;
        align-items: center;
    `}
`;

export const AvatarContainer = styled.View`
  ${({ theme }) => css`
      margin-bottom:33px;
    `}
`;


export const Content = styled.View`
  ${({ theme }) => css`
    flex:1;
    align-items: center;
    justify-content: center;

    padding:20px;
  `}
`;
export const Title = styled.Text<TitleProps>`
  ${({ theme, size }) => css`
    color:${theme.colors.text_dark};
    text-transform: uppercase;

    ${size === "small" && css`font-size:${RFValue(25)}px;`}
    ${size === "large" && css`font-size:${RFValue(50)}px; font-weight:bold`}
  `}
`;
export const Days = styled.Text`
  ${({ theme }) => css`
      font-size:${RFValue(16)}px;
      color:${theme.colors.text};
      margin-bottom:22px;
  `}
`;
