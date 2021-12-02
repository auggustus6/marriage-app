import React from "react";

import {
  Container,
  Message
} from './styles';
import { useTheme } from "styled-components";


const LoadingMarriage = () => {
  const theme = useTheme();

  return (
    <Container>
      <Message>Carregando novo casamento...</Message>
    </Container>
  )
}

export default LoadingMarriage


