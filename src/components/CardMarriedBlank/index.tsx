import React from "react";
import {
  Container,
  Title
} from './styles';
import {MaterialIcons} from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/core";

const CardMarriedBlank = () => {
  const {navigate} = useNavigation();
  const handleAddNewMarriage = () => {
      navigate('Code' as never, null as never);
  }

  return (
    <Container onPress={handleAddNewMarriage}>
      <MaterialIcons name="add" size={50} color="#3333" />
      <Title>Adicionar {"\n"} casamento</Title>
    </Container>
  )
}

export default CardMarriedBlank


