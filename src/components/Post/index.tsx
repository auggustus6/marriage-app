import React, { useState } from "react";
import { useTheme } from "styled-components";
import Avatar from "../Avatar";
import { FontAwesome } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import {
  Container,
  Header,
  HeaderContent,
  UserName,
  Date,
  ContainerThumb,
  ThumImage,
  Actions,
  Description,
  ContainerAddComment
} from './styles';
import { RFValue } from "react-native-responsive-fontsize";
import PostComments from "../PostComments";
import AddComment from "../AddComment";
import { MuralProps, useMural } from "../../hooks/useMural";
import { useMarriage } from "../../hooks/useMarriage";
import { formatedNames } from "../../utils/formatedName";
import { imageDefault } from "../../utils/imageDefault";
import { useUser } from "../../hooks/useUser";

type PostProps = MuralProps;

const Post = ({ picture, description, comments, created_at, id, likes }: PostProps) => {
  const { marriage } = useMarriage();
  const { handleToggleLike, loading } = useMural();
  const { user } = useUser();
  const theme = useTheme();
  return (
    <Container>
      <Header>
        <Avatar width={50} height={50} borderColor={theme.colors.primary} couplePhoto={marriage.couple_photo}/>
        <HeaderContent>
          <UserName>{formatedNames(marriage.fiancee, marriage.engaged)}</UserName>
          <Date>05/08/2021 13:21</Date>
        </HeaderContent>
      </Header>

      <ContainerThumb
        source={{ uri: picture ? picture : imageDefault() }}
        blurRadius={5}>
        <ThumImage
          source={{ uri: picture ? picture : imageDefault() }} resizeMode="contain" />
      </ContainerThumb>

      <Actions>
        <RectButton
          enabled={!loading}
          onPress={() => handleToggleLike(id)}>
          {likes.includes(String(user.user_id)) ? <FontAwesome name="heart" size={RFValue(28)} color={theme.colors.attention} /> : <FontAwesome name="heart-o" size={RFValue(28)} color={theme.colors.attention} />}
        </RectButton>
      </Actions>

      <Description>
        {description}
      </Description>

      <ContainerAddComment>
        <AddComment idMural={id} />
      </ContainerAddComment>

      {comments.map((comment) => <PostComments key={comment.id} {...comment} />)}

    </Container>
  )
}

export default Post


