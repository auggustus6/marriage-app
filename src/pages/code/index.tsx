import React, { useState } from "react";
import CustomInput from "../../components/Form/CustomInput";
import Button from "../../components/Button";
import {
  Container,
  ContainerForm,
  Text
} from './styles';
import { useTheme } from "styled-components";
import { useMarriage } from "../../hooks/useMarriage";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { GlobalRoutesParams } from "../../routes/globalRoutes/index.routes";
import { AccountRoutesParams } from "../../routes/account/index.routes";
import { Alliance } from "../../config/svg";
import { RFValue } from "react-native-responsive-fontsize";

const Code = ({ navigation }: NativeStackScreenProps<GlobalRoutesParams & AccountRoutesParams>) => {
  const [code, setCode] = useState('');

  const theme = useTheme();
  const {
    handleSignInWithCode
  } = useMarriage();

  const handleCode = async () => {
    if (!code) return;
    try {
      await handleSignInWithCode(code);
      navigation.navigate("Main");
    } catch (err) {
    }
  }

  const handleNavigate = async () => {
      navigation.navigate("SelectedMarriagePage");
  }

  return (
    <Container>
      <Alliance width={RFValue(120)} height={RFValue(120)} />
      <ContainerForm>

        <CustomInput
          labelColor={theme.colors.white}
          placeholder="Insira o código do casamento aqui"
          value={code}
          onChangeText={setCode}
        />

          <Button
            onPress={handleCode}
            background={theme.colors.white}
            colorText={theme.colors.primary}>ACESSAR CASAMENTO</Button>

        <Text>Ou</Text>

          <Button
            onPress={handleNavigate}
            background={theme.colors.blackButton}
            colorText={theme.colors.white}>LISTAR CASAMENTOS</Button>
      </ContainerForm>

    </Container>
  )
}

export default Code


