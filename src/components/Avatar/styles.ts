import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";
import { AvatarProps } from ".";

export const Container = styled.View<AvatarProps>`
  ${({ theme, width, height, borderColor }) => css`
        width:${RFValue(width)}px;
        height:${RFValue(height)}px;
        border-radius:${RFValue(width / 2)}px;
        background-color: ${theme.colors.white};
        

        ${borderColor && css`
          border:${RFValue(width *0.1)}px solid ${borderColor};
        `}
    `}
`;
