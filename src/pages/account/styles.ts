import { FlatList } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import styled, { css } from "styled-components/native";
import { MarriageProps } from "../../hooks/useMarriage";


export const ContentCard = styled.View`
    ${({ theme }) => css`
        margin-right:8px;
    `}
`;


export const ListCards = styled(
    FlatList as new () => FlatList<MarriageProps>
)`
  ${({ theme }) => css`
    `}
`;

export const ButtonSelectedMarriaged = styled(RectButton)`
    ${({ theme }) => css`
    `}
`;

export const Container = styled.View`
    ${({ theme }) => css`
        padding:20px;
    `}
`;

export const Form = styled.View`
    ${({ theme }) => css`
        margin-top:16px;

    `}
`;
