import { MaterialIcons } from '@expo/vector-icons';
import React, {useState} from "react";
import {
  Container,
  Input
} from './styles';
import { useTheme } from "styled-components";
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { useMural } from '../../hooks/useMural';

type AddCommentProps  = {
  idMural: number;
} &  RectButtonProps

const AddComment = ({idMural, ...rest}: AddCommentProps) => {
  const {handleAddComment} = useMural();

  const [value, setValue] = useState('');
  const theme = useTheme();

  const onPress = async (comment:string ) => {
    if(!comment) return;
    try {
      await handleAddComment(comment, idMural);
      setValue(""); 
    }catch(err){
    }
  }

  return (
    <Container>
      <Input placeholder="Adicionar comentário" value={value} onChangeText={setValue}/>
      <RectButton  onPress={() => onPress(value)}>
        <MaterialIcons size={28} color={theme.colors.text} name="send" />
      </RectButton>
    </Container>
  )
}

export default AddComment


