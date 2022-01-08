import React, { useMemo } from "react";
import WelcomePresentation from "../../components/WelcomePresentation";
import Avatar from "../../components/Avatar";
import Button from "../../components/Button";
import {
  Container,
  Header,
  AvatarContainer,
  Content,
  Title,
  Days
} from './styles';
import { useTheme } from "styled-components";
import { differenceInDays } from 'date-fns';
import { useMarriage } from "../../hooks/useMarriage";
import { RFValue } from "react-native-responsive-fontsize";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const { marriage } = useMarriage();
  const { navigate } = useNavigation();
  const theme = useTheme();

  const memoDaysOfMarriage = useMemo(() => {
    return marriage?.date ? differenceInDays(
      new Date(marriage.date),
      new Date(),
    ) : [];
  }, [marriage.date])

  return (
    <Container>
      <Header>
        <AvatarContainer>
          <Avatar
            width={RFValue(200)}
            height={RFValue(200)}
            couplePhoto={marriage?.couple_photo!}
            borderColor={theme.colors.secondary}
          />
        </AvatarContainer>
        <WelcomePresentation />
      </Header>

      <Content>
        <Title allowFontScaling={false} size="small">Faltam</Title>
        <Title allowFontScaling={false} size="large">{memoDaysOfMarriage}</Title>
        <Days>Dias</Days>

        <Button
          colorText={theme.colors.primary}
          background={theme.colors.blackButton}
          onPress={() => navigate('Pix' as never)}
          transform="uppercase">
          Gravata do noivo
        </Button>
      </Content>
    </Container>
  )
}

export default Home


