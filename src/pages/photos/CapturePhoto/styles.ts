import styled, { css } from "styled-components/native";
import { Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { RectButton } from "react-native-gesture-handler";

const { width, height } = Dimensions.get("window");


export const Container = styled.View`
  ${({ theme }) => css`
        flex:1;
    `}
`;

export const ImageBackground = styled.ImageBackground`
  ${({ theme }) => css`
        flex:1;
        width:${width}px;
        height: ${height}px;
        justify-content:flex-end;
    `}
`;

export const ContainerInput = styled.View`
  ${({ theme }) => css`
        width:100%;
        padding:8px;
        margin-bottom:8px;
        flex-direction: row;
        align-items:center;
        justify-content:space-between;
    `}
`;

export const CustomContainerInput = styled.View`
  ${({ theme }) => css`
        flex:1;
    `}
`;

export const IconContainer = styled(RectButton)`
  ${({ theme }) => css`
        width:${RFValue(45)}px;
        height:${RFValue(45)}px;
        border-radius:${5}px;
        background:${theme.colors.primary};
        margin-left:8px;

        align-items:center;
        justify-content:center;
    `}
`;
