import React from 'react';
import { useTheme } from 'styled-components';
import Button from '../../../components/Button';
import { View as MotiView } from "moti";
import {
  Container,
  IconContainer,
  GroupButtons,
  ButtonContainer
} from './styles';
import { RFValue } from 'react-native-responsive-fontsize';
import { AuthRoutesParamList } from '../../../routes/authRoutes/index.routes';
import { Alliance } from '../../../config/svg';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

const ChoiceSign = ({ navigation }: NativeStackScreenProps<AuthRoutesParamList>) => {
  const theme = useTheme();

  const handleNavigate = () => {
    navigation.navigate('SignIn');
  }

  return (
    <Container>
      <MotiView
        from={{ opacity: 0, translateX: -1000 }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={{ type: 'timing' }}
      >
        <IconContainer>
          <Alliance width={RFValue(120)} height={RFValue(120)} />
        </IconContainer>
      </MotiView>

      <GroupButtons
      testID="buttonLogin">
        <ButtonContainer>
          <Button
            background={theme.colors.secondary}
            onPress={handleNavigate}
            colorText={theme.colors.text_dark}>
            Fazer Login
          </Button>
        </ButtonContainer>

        {/* <ButtonContainer>
          <Button
            onPress={handleSignWithGoogle}
            background={theme.colors.white}
            colorText={theme.colors.text_dark}>
            Login com Google
          </Button>
        </ButtonContainer>


        {Platform.OS === 'ios' &&
          <ButtonContainer>
            <Button
            background={theme.colors.white}>
              Login com Apple
            </Button>
          </ButtonContainer>
        } */}

        <ButtonContainer>
          <Button
          testID="buttonRegister"
          onPress={() => navigation.navigate('SignUp')}
          colorText={theme.colors.white}>
            Ainda não possui uma conta? Registre-se.
          </Button>
        </ButtonContainer>


      </GroupButtons>

    </Container>
  )
}

export default ChoiceSign;