import { css } from 'styled-components';
import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    alignItems:"center",
    justifyContent:"center",
    alignSelf:"stretch"
  }
})`
      ${({ theme }) => css`
        background-color:${theme.colors.primary};
        padding:20px;
        flex:1;
    `}
`;

export const KeyBoardAvoidView = styled.KeyboardAvoidingView`
      ${({ theme }) => css`
        align-self:stretch;
        flex:1;
    `}
`;

export const IconContainer = styled.View`
      ${({ theme }) => css`
      margin-top:60px;
      margin-bottom:10px;
      align-items: center;
    `}
`;

export const Form = styled.View`
      ${({ theme }) => css`
      width:100%;
    `}
`;

export const GroupButtons = styled.View`
      ${({ theme }) => css`
      margin-top:14px;
    `}
`;

export const ButtonContainer = styled.View`
      ${({ theme }) => css`
 
    `}
`;

