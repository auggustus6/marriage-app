import React, { useRef } from 'react';
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
import CustomInputPhone from '../../../components/Form/CustomInputPhone';
import PhoneInput from 'react-native-phone-number-input';

const SignUp = ({ navigation }: NativeStackScreenProps<AuthRoutesParamList>) => {
    const theme = useTheme();
    const { handleCreateAccount } = useAuth();

    const phoneInput = useRef<PhoneInput>(null);

    const validateSchema = Yup.object().shape({
        email: Yup
            .string()
            .email()
            .required(),
        name: Yup.string().required().min(8),
        password: Yup.string().required().min(8),
        confirmPassword: Yup.string().required().min(8)
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
                    initialValues={{
                        name: "",
                        email: "",
                        password: "",
                        confirmPassword: "",
                        phoneNumber: "",
                    }}
                    validationSchema={validateSchema}
                    onSubmit={async (values) => {
                        // Call Api Login
                        const {confirmPassword, ...data} = values;

                        await handleCreateAccount({
                            ...data,
                            role:"NORMAL",
                            isActive: true
                        });
                    }}
                >
                    {({ values, errors, handleSubmit, handleChange }) => (
                        <Form>
                            <CustomInput
                                label="Nome"
                                testID="input-name"
                                labelColor={theme.colors.white}
                                onChangeText={handleChange('name')}
                                value={values.name}
                                placeholder="Insira seu e-mail cadastrado."
                            />

                            <CustomInput
                                label="E-mail"
                                testID="input-email"
                                labelColor={theme.colors.white}
                                onChangeText={handleChange('email')}
                                value={values.email}
                                placeholder="Insira seu e-mail cadastrado."
                            />

                            <CustomInput
                                labelColor={theme.colors.white}
                                testID="input-password"
                                label="Senha"
                                value={values.password}
                                onChangeText={handleChange('password')}
                                secureTextEntry
                                placeholder="Insira sua senha de 8 caracteres."
                            />

                            <CustomInput
                                labelColor={theme.colors.white}
                                testID="input-confirm"
                                label="Confirmação de senha"
                                value={values.confirmPassword}
                                onChangeText={handleChange('confirmPassword')}
                                secureTextEntry
                                placeholder="Insira sua senha de 8 caracteres."
                            />

                            <CustomInputPhone
                                label="Telefone (WhatsApp)"
                                labelColor={theme.colors.white}
                                placeholder="Insira seu whatsapp"
                                ref={phoneInput}
                                value={values.phoneNumber}
                                defaultCode="BR"
                                onChangeText={handleChange('phoneNumber')}
                                withDarkTheme
                            />


                            <GroupButtons>
                                <ButtonContainer>
                                    <Button
                                        testID="submit-button"
                                        onPress={() => handleSubmit()}
                                        background={theme.colors.blackButton} colorText={theme.colors.primary}>
                                        Criar Conta
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

export default SignUp;