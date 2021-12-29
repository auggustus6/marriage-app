import React from "react";
import { useTheme } from "styled-components";
import { CommentsProps, MuralProps, useMural } from "../../hooks/useMural";
import { MaterialIcons } from '@expo/vector-icons';
import Avatar from '../Avatar';
import {
  Container,
  Header,
  ContainerHeader,
  HeaderContent,
  ContainerIcons,
  UserName,
  Date,
  Comment
} from './styles';
import { RFValue } from "react-native-responsive-fontsize";

type PostCommentsProps = CommentsProps;

const PostComments = ({ created_at, description, id, mural_id }: PostCommentsProps) => {
  const { handleRemoveComment } = useMural();
  const theme = useTheme();

  const onPressRemove = async (idComment: number) => {
    try {
      await handleRemoveComment(idComment, mural_id);
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <Container>
      <Header>
        <Avatar width={25} height={25} borderColor={theme.colors.primary} />
        <ContainerHeader>
          <HeaderContent>
            <UserName>Anonymous</UserName>
            <Date>{created_at}</Date>
          </HeaderContent>
          <ContainerIcons onPress={() => onPressRemove(id)}>
            <MaterialIcons name="delete" size={RFValue(24)} />
          </ContainerIcons>
        </ContainerHeader>
      </Header>

      <Comment>{description}</Comment>
    </Container>
  )
}

export default PostComments


