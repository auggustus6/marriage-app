import React from 'react';
import { useTheme } from 'styled-components';
import Button from '../../../components/Button';
import Alliance from "../../../assets/svg/icon_alliance.svg";
import { View as MotiView } from "moti";
import {
  Container,
  KeyBoardAvoidView,
  IconContainer,
  Form,
  GroupButtons,
  ButtonContainer
} from './styles';
import { RFValue } from 'react-native-responsive-fontsize';
import { useAuth } from '../../../hooks/useAuth';
import CustomInput from '../../../components/Form/CustomInput';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthRoutesParamList } from '../../../routes/authRoutes/index.routes';
import * as Yup from 'yup';
import { Formik } from 'formik';

const SignIn = ({ navigation }: NativeStackScreenProps<AuthRoutesParamList>) => {
  const theme = useTheme();
  const { handleLogin, loading } = useAuth();

  const validateSchema = Yup.object().shape({
    email: Yup
      .string()
      .email()
      .required(),
    password: Yup.string().required().min(8)
  });


  return (
    <Container>
      <KeyBoardAvoidView
        behavior="padding"
      >

        <MotiView
          from={{ opacity: 0, translateX: -1000 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ type: 'timing' }}
        >
          <IconContainer>
            <Alliance
              width={RFValue(120)} height={RFValue(120)} />
          </IconContainer>
        </MotiView>

        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validateSchema}
          onSubmit={async (values) => {
            // Call Api Login
            try {
              await handleLogin(values.email, values.password);
            }catch(err){
            }
          }}
        >
          {({ values, errors, handleSubmit, handleChange }) => (
            <Form>
              <CustomInput
                label="E-mail"
                labelColor={theme.colors.white}
                onChangeText={handleChange('email')}
                value={values.email}
                placeholder="Insira seu e-mail cadastrado."
              />

              <CustomInput
                labelColor={theme.colors.white}
                label="Senha"
                value={values.password}
                onChangeText={handleChange('password')}
                secureTextEntry
                placeholder="Insira sua senha de 8 caracteres."
              />


              <GroupButtons>
                <ButtonContainer>
                  <Button
                    onPress={() => handleSubmit()}
                    background={theme.colors.blackButton}
                    enabled={!loading}
                    colorText={theme.colors.white}>
                    Entrar
                  </Button>
                </ButtonContainer>

                <ButtonContainer>
                  <Button
                    onPress={() => navigation.goBack()}
                    colorText={theme.colors.white}>
                    Voltar a tela de apresentação
                  </Button>
                </ButtonContainer>

              </GroupButtons>
            </Form>
          )}
        </Formik>

      </KeyBoardAvoidView>
    </Container >

  )
}

export default SignIn;