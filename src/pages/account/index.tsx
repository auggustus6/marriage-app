import React, { useMemo } from "react";
import { KeyboardAvoidingView } from 'react-native';
import CardMarried from "../../components/CardMarried";
import CustomInput from "../../components/Form/CustomInput";
import PageContainer from "../../components/PageContainer";
import TitlePage from "../../components/TitlePage";
import Button from "../../components/Button";
import CardMarriedBlank from "../../components/CardMarriedBlank";

import {
  ContentCard,
  ListCards,
  ButtonSelectedMarriaged,
  Container,
  Form,
  ContainerButton
} from './styles';

import { useTheme } from "styled-components";
import { useAuth } from "../../hooks/useAuth";
import { useMarriage } from "../../hooks/useMarriage";
import { format } from "date-fns";
import { formatedNames } from "../../utils/formatedName";
import { useUser } from "../../hooks/useUser";

const Account = () => {
  const theme = useTheme();
  const { user } = useUser();
  const { handleLogout } = useAuth();
  const { marriage, handleSignInWithCode, resetContext } = useMarriage();

  const dataUser = useMemo(() => {
    return user ? user : null;
  }, [user]);

  const fakeMarriage = {
    id: 0
  }

  const handleClearData = async () => {
    try {
      await handleLogout();
      resetContext();
    } catch (err) {
    }
  }

  return (
    <PageContainer
      title="Minha Conta"
      subTtitle={user.name}
    >
      {user.marriages ? (
        <ListCards<any>
          data={[fakeMarriage as any, ...user?.marriages]}
          keyExtractor={(item: any) => String(item.id)}
          renderItem={({ item, index }: { item: any, index: any }) => (
            <ContentCard>
              {index === 0 && <CardMarriedBlank />}
              {index !== 0 &&
                <ButtonSelectedMarriaged
                  onPress={() => handleSignInWithCode(item.code)}>
                  <CardMarried
                    couplePhoto={item.couple_photo}
                    titleMarriage={formatedNames(item.fiancee, item.engaged)}
                    dateMarriage={format(new Date(item.date), "dd/MM/yyyy")}
                    selected={marriage.code === item.code} />
                </ButtonSelectedMarriaged>
              }
            </ContentCard>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 20, paddingVertical: 5 }}
        />
      ) : undefined}

      <Container>
        <KeyboardAvoidingView
          behavior="padding"
        >
          <TitlePage title="Conta" subTitle="Meus Dados" />

          <Form>
            <CustomInput label="Nome" editable={false} value={dataUser?.name} />
            <CustomInput label="E-mail" editable={false} value={dataUser?.email} />

            <ContainerButton>
              <Button
                background={theme.colors.primary}
                colorText={theme.colors.white}>
                Salvar
              </Button>

              <Button
                onPress={handleClearData}
                colorText={theme.colors.blackButton}>
                Deslogar
              </Button>
            </ContainerButton>
          </Form>
        </KeyboardAvoidingView>
      </Container>
    </PageContainer>
  )
}

export default Account


