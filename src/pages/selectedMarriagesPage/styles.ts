import styled, { css } from "styled-components/native";
import {  FlatList, Platform, StatusBar } from "react-native";
import { MarriageProps } from "../../hooks/useMarriage";

export const Container = styled.SafeAreaView`
  ${({ theme }) => css`
        flex:1;
        padding-top: ${Platform.OS === "android" ? StatusBar.currentHeight : 0}px;
    `}
`;

export const ListCards = styled(
    FlatList as new () => FlatList<MarriageProps>
  )`
  ${({ theme }) => css`
    `}
  `;