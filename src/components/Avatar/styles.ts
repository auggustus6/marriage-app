import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";
import { AvatarProps } from ".";

export const Container = styled.Image.attrs<AvatarProps>(({ borderColor = "#B62738" }) => ({
  borderWidth:5,
  borderColor
}))<AvatarProps>`
  ${({  width, height }) => css`
        width:${RFValue(width)}px;
        height:${RFValue(height)}px;
        border-radius:${RFValue(width / 2)}px;
    `}
`;
