import React from "react";
import Avatar from '../Avatar'
import {
  Container,
  Title,
  Date
} from './styles';

type CardMarriedProps = {
  selected?: boolean;
  titleMarriage: string;
  dateMarriage: string;
}

const CardMarried = ({ selected = false, titleMarriage, dateMarriage }: CardMarriedProps) => {
  return (
    <Container selected={selected}>
      <Avatar width={54} height={54} borderColor="#eeee" />
      <Title selected={selected}>{titleMarriage}</Title>
      <Date selected={selected}>{dateMarriage}</Date>
    </Container>
  )
}

export default CardMarried


