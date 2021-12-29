import React, { useState } from "react";
import CustomInput from "../../components/Form/CustomInput";
import Button from "../../components/Button";
import {
  Container,
  ContainerForm
} from './styles';
import { useTheme } from "styled-components";
import { useMarriage } from "../../hooks/useMarriage";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { GlobalRoutesParams } from "../../routes/globalRoutes";

const Code = ({ navigation }: NativeStackScreenProps<GlobalRoutesParams>) => {
  const [code, setCode] = useState('laura-bellini-carlos-augusto-1640789284232');

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
      console.log(err);
    }
  }

  return (
    <Container>
      <ContainerForm>
        <CustomInput
          label="Código do casamento:"
          labelColor={theme.colors.white}
          placeholder="Insira o código do casamento aqui"
          value={code}
          onChangeText={setCode}
        />
        <Button
          onPress={handleCode}
          background="#393939"
          colorText={theme.colors.primary}>ACESSAR</Button>
      </ContainerForm>

    </Container>
  )
}

export default Code


