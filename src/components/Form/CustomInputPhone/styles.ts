import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";
import PhoneInput from "react-native-phone-number-input";


type LabelProps = {
  labelColor?:string;
}


export const Container = styled.View`
  ${({ theme }) => css`
    `}
`;

export const Label = styled.Text<LabelProps>`
  ${({ theme, labelColor }) => css`
      margin-bottom:10px;
      font-size:${RFValue(18)}px;
      font-weight: bold;
      color:${labelColor ? labelColor : theme.colors.text};
    `}
`;


export const Input = styled(PhoneInput).attrs({
  textInputStyle: {
    fontSize:RFValue(18),
    color:'#f1003b'
  },
  containerStyle:{
    width:'100%',
    borderRadius:8,
    padding:2,
  }
})`
  ${({ theme }) => css`
      background:${theme.colors.white};
      padding:10px;
      margin-bottom:20px;
      border-radius:5px;
      width:100%;
    `}
`;

