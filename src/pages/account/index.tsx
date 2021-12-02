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
  Form
} from './styles';

import { useTheme } from "styled-components";
import { useAuth } from "../../hooks/useAuth";
import { useMarriage } from "../../hooks/useMarriage";
import { format } from "date-fns";

const Account = () => {
  const theme = useTheme();
  const { handleLogout, user } = useAuth();
  const { marriage, handleSignInWithCode, resetContext } = useMarriage();

  const dataUser = useMemo(() => {
    return user ? user : null;
  }, [user]);

  const formatedNames = (fiance:string, engaged:string) => {
    const woman = fiance.split(" ")[0];
    const men = engaged.split(" ")[0];

    return `${woman} & ${men}`;
  }

  const handleClearData = async () => {
    try {
      await handleLogout();
      resetContext();
    }catch(err){
      console.log('Ops, algo aconteceu. Tente novamente mais tarde');
    }
  }


  return (
    <PageContainer
      title="Conta"
      subTtitle={'Carlos Augusto'}
    >
      <ListCards
        data={[1 as any, ...user.marriages]}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item, index }) => (
          <ContentCard>
            {index === 0 && <CardMarriedBlank />}
            {index !== 0 &&
              <ButtonSelectedMarriaged onPress={() => handleSignInWithCode(item.code)}>
                <CardMarried
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


      <Container>
        <KeyboardAvoidingView
          behavior="padding"
        >
          <TitlePage title="Conta" subTitle="Meus Dados" />

          <Form>
            <CustomInput label="Nome" placeholder={dataUser?.name} />
            <CustomInput label="E-mail" placeholder={dataUser?.email} />

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
          </Form>
        </KeyboardAvoidingView>
      </Container>
    </PageContainer>
  )
}

export default Account


