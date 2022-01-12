import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";


export const Header = styled.SafeAreaView`
  ${({ theme }) => css`
      padding:20px;
      padding-top:60px;
      height:${RFValue(80)}px;

      align-items: center;
      flex-direction: row;
      justify-content: space-between;
    `}
`;