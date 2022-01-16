import React, { useEffect } from "react";
import {
    Container, QRCodeContainer, QRCodeInput, Text, TextThankYou, Image, Group
} from './styles';
import Button from "../../../components/Button";
import { useTheme } from "styled-components";
import { Entypo } from '@expo/vector-icons'
import { RFValue } from "react-native-responsive-fontsize";
const PixPage = () => {
    const theme = useTheme();
    return (
        <Container>
            <QRCodeContainer>
                <Image
                resizeMode="cover"
                source={{ uri: "https://br.qr-code-generator.com/wp-content/themes/qr/new_structure/markets/core_market/generator/dist/generator/assets/images/websiteQRCode_noFrame.png" }} />
            </QRCodeContainer>
            <QRCodeInput>
                <Text>28U1HJIEOjaiosdi12312%¨#!kaska3oasd</Text>
            </QRCodeInput>

            <Button
                background={theme.colors.blackButton}
                colorText={theme.colors.white}>
                COPIAR CHAVE PIX
            </Button>

            <Group>
                <Entypo name="heart" color={theme.colors.attention} size={RFValue(50)} />
                <TextThankYou>
                    Obrigado você é muito especial!
                </TextThankYou>
            </Group>
        </Container>
    )
}

export default PixPage


