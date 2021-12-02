import React from "react";
import { RectButtonProps } from 'react-native-gesture-handler';
import {
  Container,
  Title
} from './styles';

type ButtonProps = {
  children: React.ReactNode;
  colorText?: string;
  background?:string;
  transform?: 'uppercase' | 'none'
} & RectButtonProps

const Button = ({ children, colorText, transform, background, testID, ...rest }: ButtonProps) => {
  return (
    <Container {...rest} testID={testID} style={{backgroundColor:background}}>
      <Title colorText={colorText} transform={transform}>
        {children}
      </Title>
    </Container>
  )
}

export default Button


