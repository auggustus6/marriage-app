import { Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";


export const Container = styled.SafeAreaView`
  ${({ theme }) => css`
        flex:1;
        padding-left:20px;
        padding-right:20px;

        align-items:center;
        justify-content:space-evenly;
    `}
`;

export const QRCodeContainer = styled.View.attrs({
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5,
})`
  ${({ theme }) => css`
        width:100%;
        height:${RFValue(300)}px;
        background:${theme.colors.blackButton};
        border-radius:8px;
        padding:8px;
        align-items:center;
        justify-content:center;
    `}
`;

export const Image = styled.Image`
  ${({ theme }) => css`
      width:100%;
      height:100%;
    `}
`;

export const QRCodeInput = styled.View`
  ${({ theme }) => css`
        width:100%;
        height:${RFValue(48)}px;
        background:#eee;
        align-items:center;
        justify-content:center;
        border-radius:4px;

    `}
`;

export const Text = styled.Text`
  ${({ theme }) => css`
        font-size:${RFValue(12)}px;
    `}
`;


export const Group = styled.View`
  ${({ theme }) => css`
        align-items:center;
    `}
`;

export const TextThankYou = styled.Text`
  ${({ theme }) => css`
        font-size:${RFValue(18)}px;
        text-align:center;
        color:#ccc;

    `}
`;



