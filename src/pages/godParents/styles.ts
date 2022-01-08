import { FlatList } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";
import { GodParentsDataProps } from ".";

export const Container = styled.View`
  ${({ theme }) => css`
  flex:1;
  `}
`;

export const ListCards = styled.FlatList`
${({ theme }) => css``}
`;
