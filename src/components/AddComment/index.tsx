import { MaterialIcons } from '@expo/vector-icons';
import React, {useState} from "react";
import {
  Container,
  Input
} from './styles';
import { useTheme } from "styled-components";
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

type AddCommentProps  =  RectButtonProps

const AddComment = ({...rest}: AddCommentProps) => {
  const [value, setValue] = useState('');
  const theme = useTheme();

  return (
    <Container>
      <Input placeholder="Adicionar comentário" value={value} onChangeText={setValue}/>
      <RectButton {...rest}>
        <MaterialIcons size={28} color={theme.colors.text} name="send" />
      </RectButton>
    </Container>
  )
}

export default AddComment


