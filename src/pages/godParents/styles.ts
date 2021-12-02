import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

export const PhotoBackground = styled.ImageBackground.attrs({
  borderTopLeftRadius: 40,
  borderTopRightRadius: 40,

})`
  ${({ theme }) => css`
    flex:1;
    height:${RFPercentage(100)}px;
    `}
`;

export const Footer = styled.View`
  ${({ theme }) => css`
    position: absolute;
    bottom:0;

    height:${RFPercentage(40)}px;

    background:${theme.colors.white};
    border-top-left-radius:40px;
    border-top-right-radius:40px;
    padding:20px;
  `}
`;
export const FooterHeader = styled.View`
  ${({ theme }) => css`
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
  `}
`;
export const FooterTitle = styled.Text`
  ${({ theme }) => css`
      font-size:${RFValue(18)}px;
      color: ${theme.colors.attention};
  `}
`;

export const FooterContent = styled.Text`
  ${({ theme }) => css`
      font-size:${RFValue(14)}px;
      color: ${theme.colors.text_dark};
      line-height: ${RFValue(28)}px;
      margin-top:17px;
  `}
`;

export const MessageText = styled.Text`
  ${({ theme }) => css`
      font-size:${RFValue(12)}px;
      color: ${theme.colors.text};
      margin-top:12px;
      text-align: center;
  `}
`;
