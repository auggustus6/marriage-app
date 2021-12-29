import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";
import { AvatarProps } from ".";

export const Container = styled.Image<AvatarProps>`
  ${({ theme, width, height, borderColor }) => css`
        width:${RFValue(width)}px;
        height:${RFValue(height)}px;
        border-radius:${RFValue(width / 2)}px;

    `}
`;
