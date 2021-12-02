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

const Post = () => {
  const theme = useTheme();

  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState<string[]>([]);

  const handleAddComment = () => {
    setComments([...comments, 'Sequestram minha sogra']);
    !showComments && setShowComments(true);
  }

  return (
    <Container>
      <Header>
        <Avatar width={50} height={50} borderColor={theme.colors.primary} />
        <HeaderContent>
          <UserName>Carlos Augusto S. Salles</UserName>
          <Date>05/08/2021 13:21</Date>
        </HeaderContent>
      </Header>

      <ContainerThumb>
        <ThumImage
        source={{ uri: 'https://i.pinimg.com/474x/7a/2f/85/7a2f8588ff303937286555cd8a19f74a.jpg' }} resizeMode="contain" />
      </ContainerThumb>

      <Actions>
        <RectButton>
          <FontAwesome name="heart" size={RFValue(24)} color={theme.colors.attention} />
        </RectButton>

      </Actions>

      <Description>
        Este é automóvel desportivo. Surgiu do lendário touro de lide indultado na praça Real Maestranza de Sevilla.
      </Description>

      <ContainerAddComment>
        <AddComment onPress={handleAddComment}/>
      </ContainerAddComment>


      <RectButton onPress={() => setShowComments(!showComments)}>
        <Description>
          Ver comentários
        </Description>
      </RectButton>

      {showComments && comments.map(comment => (
        <PostComments key={comment} comment={comment} />
      ))}
    </Container>
  )
}

export default Post


