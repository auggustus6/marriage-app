import React from "react";
import { Feather } from '@expo/vector-icons'
import {
  Container,
} from './styles';
import { useTheme } from "styled-components";

type AvatarUserProps = {
  color?: "white" | "primary"
}

export const AvatarUser = ({ color = "primary" }: AvatarUserProps) => {
  const theme = useTheme();
  return (
    <Container>
      <Feather
        name="user"
        size={24}
        color={theme.colors[color]} />
    </Container>
  )
}



