import React, {forwardRef} from "react";
import { PhoneInputProps } from "react-native-phone-number-input";
import {
  Container,
  Label,
  Input
} from './styles';

type CustomInputPhoneProps = {
  label?: string;
  labelColor?: string;
  testID?: string;
} & PhoneInputProps


const CustomInputPhone = ({ label, labelColor, onChangeText, value, placeholder, onChangeFormattedText, defaultCode }: CustomInputPhoneProps, ref: any) => {
  return (
    <Container>
      {label && <Label labelColor={labelColor}>{label}</Label>}
      <Input
        onChangeText={onChangeText}
        value={value}
        ref={ref}
        placeholder={placeholder}
        defaultValue={value}
        defaultCode={defaultCode}
        layout="first"
        onChangeFormattedText={onChangeFormattedText}
      />
    </Container>
  )
}

export default forwardRef(CustomInputPhone)


