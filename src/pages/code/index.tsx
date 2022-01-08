import React, { useState } from "react";
import CustomInput from "../../components/Form/CustomInput";
import Button from "../../components/Button";
import {
  Container,
  ContainerForm,
  ContainerButton
} from './styles';
import { useTheme } from "styled-components";
import { useMarriage } from "../../hooks/useMarriage";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { GlobalRoutesParams } from "../../routes/globalRoutes";

const Code = ({ navigation }: NativeStackScreenProps<GlobalRoutesParams>) => {
  // const [code, setCode] = useState('ana-batista-pedro-soares-1641422667971');
  // const [code, setCode] = useState('carlos-affonso-chrislainne-1641595603060');
  const [code, setCode] = useState('carlos-cesar-livia-torres-1641595555799');
  // const [code, setCode] = useState('laura-bellini-carlos-augusto-1640806656030');

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

        <ContainerButton>
          <Button
            onPress={handleCode}
            background="#393939"
            colorText={theme.colors.primary}>ACESSAR CASAMENTO</Button>
        </ContainerButton>
      </ContainerForm>

    </Container>
  )
}

export default Code


