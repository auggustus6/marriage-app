import React from "react";
import {
  Container,
  Text,
} from './styles';

type CustomAlertProps = {
  message: string;
  type: "success" | "error"
}

const CustomAlert = ({ message, type }: CustomAlertProps) => {
  return (
    <Container type={type}>
      <Text type={type}>{message}</Text>
    </Container>
  )
}

export default CustomAlert


