import React from "react";
import { AvatarUser } from "../AvatarUser";
import TitlePage from "../TitlePage";
import { 
  Container,
  Header,
  Content
 } from './styles';

 type PageContainerProps = {
   title?: string;
   subTtitle?: string;
   children: React.ReactNode;
 }
 
const PageContainer= ({children, title, subTtitle} :PageContainerProps) => {
  return (
  <Container>
    <Header>
      <TitlePage 
        title={title}
        subTitle={subTtitle}
      />
      <AvatarUser />
    </Header>

    <Content>
      {children}
    </Content>
 </Container>
 )
}

export default PageContainer


