import styled, { css } from "styled-components/native";
import {  FlatList } from "react-native";
import { MarriageProps } from "../../hooks/useMarriage";

export const Container = styled.View`
  ${({ theme }) => css`
        flex:1;
    `}
`;

export const ListCards = styled(
    FlatList as new () => FlatList<MarriageProps>
  )`
  ${({ theme }) => css`
    `}
  `;