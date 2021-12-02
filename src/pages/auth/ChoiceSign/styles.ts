import { css } from 'styled-components';
import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.View`
      ${({ theme }) => css`
        background-color:${theme.colors.primary};
        flex:1;
        align-items: center;
        justify-content: center;
        padding:0 20px;
    `}
`;


export const IconContainer = styled.View`
      ${({ theme }) => css`
      margin:40px 0;
    `}
`;

export const GroupButtons = styled.View`
      ${({ theme }) => css`
      align-self: stretch;
    `}
`;

export const ButtonContainer = styled.View`
      ${({ theme }) => css`
        margin:8px 0;
    `}
`;

