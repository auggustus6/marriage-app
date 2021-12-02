import React from "react";
import { 
  Container,
  Title,
  SubTitle
 } from './styles';

 type TitlePageProps = {
  title?: string;
  subTitle?: string;
 }
 
const TitlePage = ({title = "Carlos e Laura", subTitle = "Os Padrinhos"}: TitlePageProps) => {
  return (
  <Container>
    <Title>{title}</Title>
    <SubTitle>{subTitle}</SubTitle>
 </Container>
 )
}

export default TitlePage


