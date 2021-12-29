import { BorderlessButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";


export const Container = styled.View`
  ${({ theme }) => css`
      flex-direction:column;
      padding:10px;
      border-bottom-width: 1px;
      border-bottom-color: #eee;
    `}
`;

export const Header = styled.View`
  ${({ theme }) => css`
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  `}
`;
export const ContainerHeader = styled.View`
  ${({ theme }) => css`
    flex-direction: row;
    flex:1;
    align-items: center;
    justify-content: space-between;
  `}
`;
export const HeaderContent = styled.View`
  ${({ theme }) => css`
    flex-direction: column;
    align-items: flex-start;
    margin-left:8px;
  `}
`;
export const ContainerIcons = styled(BorderlessButton)`
  ${({ theme }) => css`

  `}
`;
export const UserName = styled.Text`
  ${({ theme }) => css`
    font-size:${RFValue(14)}px;
    color:${theme.colors.text_dark};
  `}
`;
export const Date = styled.Text`
  ${({ theme }) => css`
    font-size:${RFValue(12)}px;
    color:${theme.colors.text};
  `}
`;

export const Comment = styled.Text`
  ${({ theme }) => css`
    font-size:${RFValue(12)}px;
    color:${theme.colors.text_dark};
    margin-top:8px;
  `}
`;