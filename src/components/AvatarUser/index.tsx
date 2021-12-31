import React from "react";
import { Feather } from '@expo/vector-icons'
import {
  Container,
} from './styles';
import { useTheme } from "styled-components";
import { useNavigation } from "@react-navigation/native";

type AvatarUserProps = {
  color?: "white" | "primary"
}

export const AvatarUser = ({ color = "primary" }: AvatarUserProps) => {
  const {navigate} = useNavigation();
  const theme = useTheme();
  return (
    <Container onPress={() => navigate('Account' as any)}>
      <Feather
        name="user"
        size={24}
        color={theme.colors[color]} />
    </Container>
  )
}



