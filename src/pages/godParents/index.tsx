import React from "react";
import PageContainer from "../../components/PageContainer";
import { Feather } from '@expo/vector-icons'
import {
  PhotoBackground,
  Footer,
  FooterHeader,
  FooterTitle,
  FooterContent,
  MessageText
} from './styles';
import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components";

const GodParents = () => {
  const theme = useTheme();
  return (
    <PageContainer>
      <PhotoBackground source={{ uri: 'https://i.pinimg.com/474x/7a/2f/85/7a2f8588ff303937286555cd8a19f74a.jpg' }}>
        <Footer>
          <FooterHeader>
            <FooterTitle>Lucas e Bruna</FooterTitle>
            <Feather size={RFValue(32)} name="heart" color={theme.colors.attention_light} />
          </FooterHeader>

          <FooterContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas condimentum malesuada est, vel congue sapien posuere facilisis. Nullam vel ante eu enim pretium pharetra sit amet in justo. 
          </FooterContent>

          <MessageText>
            Passe para o lado para mais padrinhos
          </MessageText>
        </Footer>
      </PhotoBackground>
    </PageContainer>
  )
}

export default GodParents


