import React from "react";
import { EvilIcons } from '@expo/vector-icons'
import {
    Container,
    PhotoBackground,
    Footer,
    FooterHeader,
    FooterTitle,
    FooterContent,
} from './styles';
import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components";

type CardParentsProps = {
    id: string;
    name: string;
    photo: string;
    description: string;
}

const CardParents = ({ id, name, photo, description }: CardParentsProps) => {
    const theme = useTheme();
    return (
        <Container>
            <PhotoBackground source={{ uri: photo }}>
                <Footer>
                    <FooterHeader>
                        <FooterTitle allowFontScaling={false}>{name}</FooterTitle>
                        <EvilIcons size={RFValue(32)} name="heart" color={theme.colors.attention_light} />
                    </FooterHeader>

                    <FooterContent numberOfLines={3} allowFontScaling={false}>
                        {description}
                    </FooterContent>
                </Footer>
            </PhotoBackground>
        </Container>
    )
}

export default CardParents


