import React from "react";
import {  TextInputProps } from "react-native";
import {
  Container,
  Label,
  Input
} from './styles';

type CustomInputProps = {
  label?: string;
  labelColor?:string;
} &  TextInputProps


const CustomInput = ({ label, labelColor,  onChangeText, value, testID, placeholder, placeholderTextColor, secureTextEntry }: CustomInputProps) => {
  return (
    <Container>
      {label && <Label labelColor={labelColor}>{label}</Label>}
      <Input 
         onChangeText={onChangeText}
         value={value}
         testID={testID}
         secureTextEntry={secureTextEntry}
         placeholder={placeholder}
         placeholderTextColor={placeholderTextColor}
         
      />
    </Container>
  )
}

export default CustomInput


