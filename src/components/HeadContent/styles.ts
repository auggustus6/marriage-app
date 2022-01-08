import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";


export const Header = styled.SafeAreaView`
  ${({ theme }) => css`
      padding:20px;
      padding-bottom:40px;
      padding-top:40px;
      height:${RFValue(20)}px;

      align-items: center;
      flex-direction: row;
      justify-content: space-between;
    `}
`;