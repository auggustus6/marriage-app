import { FlatList } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";
import { MuralProps } from "../../hooks/useMural";


export const Container = styled.View`
  ${({ theme }) => css`
        flex:1;
        background-color: ${theme.colors.white};
    `}
`;


export const ListCards = styled(
  FlatList as new () => FlatList<MuralProps>
)`
${({ theme }) => css`
    margin-top:80px;
  `}
`;
