import React from "react";
import { useTheme } from "styled-components";
import { CommentsProps, useMural } from "../../hooks/useMural";
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
import { useAuth } from "../../hooks/useAuth";
import { imageDefault } from "../../utils/imageDefault";

type PostCommentsProps = CommentsProps;

const PostComments = ({ created_at, description, id, mural_id, user_id, user: userComment }: PostCommentsProps) => {
  const { handleRemoveComment, loading } = useMural();
  const { user } = useAuth();
  const theme = useTheme();

  const onPressRemove = async (idComment: number) => {
    if(loading) return;
    try {
      await handleRemoveComment(idComment, mural_id);
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <Container>
      <Header>
        <Avatar
          width={25}
          height={25}
          borderColor={theme.colors.primary}
          couplePhoto={imageDefault()} />
        <ContainerHeader>
          <HeaderContent>
            <UserName>{userComment.name}</UserName>
            <Date>{created_at}</Date>
          </HeaderContent>
          {(user.user_id || user.id) == user_id && (
            <ContainerIcons onPress={() => onPressRemove(id)}>
              <MaterialIcons name="delete" size={RFValue(24)} />
            </ContainerIcons>
          )}
        </ContainerHeader>
      </Header>

      <Comment>{description}</Comment>
    </Container>
  )
}

export default PostComments


