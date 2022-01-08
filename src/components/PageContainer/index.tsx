import React from "react";
import HeadContent from "../HeadContent";
import {
  Container,
  Content
} from './styles';

type PageContainerProps = {
  title?: string;
  subTtitle?: string;
  children: React.ReactNode;
}

const PageContainer = ({ children, title, subTtitle }: PageContainerProps) => {
  return (
    <Container>
      <HeadContent title={title!}/>
      <Content>
        {children}
      </Content>
    </Container>
  )
}

export default PageContainer


