import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";


export const FabContainer = styled(RectButton)<{tabBarHeight: number}>`
  ${({ theme, tabBarHeight }) => css`
      position: absolute;

      width:${RFValue(60)}px;
      height:${RFValue(60)}px;
      border-radius:${RFValue(30)}px;
      bottom:${tabBarHeight}px;
      right:10px;

      background-color:#f1003b;
      align-items:center;
      justify-content:center;
  `}
`;


