import React, {useMemo} from "react";
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
import {differenceInDays} from 'date-fns';
import { useMarriage } from "../../hooks/useMarriage";

const Home = () => {
  const {marriage} = useMarriage();
  const theme = useTheme();

  const memoDaysOfMarriage = useMemo(() => {
    return marriage?.date ? differenceInDays(
        new Date(marriage.date),
        new Date(),
    ) : [];
  }, [marriage.date])

  console.log(marriage.couple_photo)

  return (
    <Container>
      <Header>
        <AvatarContainer>
          <Avatar
            width={200}
            height={200}
            couplePhoto={marriage?.couple_photo!}
            borderColor={theme.colors.secondary}
          />
        </AvatarContainer>
        <WelcomePresentation />
      </Header>

      <Content>
        <Title size="small">Faltam</Title>
        <Title size="large">{memoDaysOfMarriage}</Title>
        <Days>Dias</Days>

        <Button
          colorText={theme.colors.primary}
          background={theme.colors.blackButton}
          transform="uppercase">
          Gravata do noivo
        </Button>
      </Content>
    </Container>
  )
}

export default Home


