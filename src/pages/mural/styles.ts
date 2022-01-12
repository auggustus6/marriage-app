import { FlatList } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";
import { MuralProps } from "../../hooks/useMural";


export const Container = styled.View`
  ${({ theme }) => css`
        flex:1;
    `}
`;

export const Header = styled.View`
  ${({ theme }) => css`
      padding:20px;
      padding-bottom:20px;
      padding-top:40px;
      height:${RFValue(20)}px;

      align-items: center;
      flex-direction: row;
      justify-content: space-between;
    `}
`;


export const ListCards = styled(
  FlatList as new () => FlatList<MuralProps>
)`
${({ theme }) => css`
    margin-top:80px;
  `}
`;
