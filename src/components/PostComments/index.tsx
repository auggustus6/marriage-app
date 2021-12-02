import React from "react";
import { useTheme } from "styled-components";
import Avatar from '../Avatar';
import { 
  Container,
  Header,
  HeaderContent,
  UserName,
  Date,
  Comment
 } from './styles';

 type PostCommentsProps = {
   comment: string;
 }
 
const PostComments = ({comment}:PostCommentsProps) => {
  const theme = useTheme();
  return (
  <Container>
    <Header>
        <Avatar width={25} height={25} borderColor={theme.colors.primary} />
        <HeaderContent>
          <UserName>Anonymous</UserName>
          <Date>05/08/2021 13:21</Date>
        </HeaderContent>
      </Header>

      <Comment>{comment}</Comment>
 </Container>
 )
}

export default PostComments


