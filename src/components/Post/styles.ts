import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";


export const Container = styled.View`
  ${({ theme }) => css`
        flex:1;
        
    `}
`;

export const Header = styled.View`
  ${({ theme }) => css`
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    padding:20px;
  `}
`;
export const HeaderContent = styled.View`
  ${({ theme }) => css`
    flex-direction: column;
    align-items: flex-start;
    margin-left:8px;
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

export const ContainerThumb = styled.ImageBackground`
  ${({ theme }) => css`
    background:#eee;
  `}
`;

export const ThumImage = styled.Image`
  ${({ theme }) => css`
    width:100%;
    height:${RFPercentage(50)}px;
  `}
`;
export const Actions = styled.View`
  ${({ theme }) => css`
    flex-direction: row;
    align-items: center;
    padding:5px 20px;
  `}
`;
export const Description = styled.Text`
  ${({ theme }) => css`
    font-size:${RFValue(15)}px;
    color:${theme.colors.text_dark};
    line-height: ${RFValue(28)}px;
    padding:5px 20px;

  `}
`;

export const ContainerAddComment = styled.View`
  ${({ theme }) => css`
    padding:5px 20px;
  `}
`;
