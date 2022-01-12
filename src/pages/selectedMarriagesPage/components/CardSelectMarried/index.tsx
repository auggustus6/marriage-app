import React from "react";
import { RFValue } from "react-native-responsive-fontsize";
import Avatar from "../../../../components/Avatar";
import { MarriageProps } from "../../../../hooks/useMarriage";
import { formatedNames } from "../../../../utils/formatedName";
import {
  Container,
  ContainerContent,
  Text
} from './styles';

type CardSelectMarriedProps = {
  handleSelectMarriaged: (codeMarriaged: string) => void;
} & MarriageProps;

const CardSelectMarried = ({ id ,fiancee, engaged, couple_photo, code, handleSelectMarriaged }: CardSelectMarriedProps) => {
  return (
    <Container
      onPress={() => handleSelectMarriaged(code)}
    >
      <Avatar
        width={RFValue(50)}
        height={RFValue(50)}
        borderColor="rgba(255,255,255,0.5)"
        couplePhoto={couple_photo}
      />
      <ContainerContent>
        <Text title allowFontScaling={false}>{formatedNames(fiancee, engaged)}</Text>
        <Text allowFontScaling={false}>{code}</Text>
      </ContainerContent>
    </Container>
  )
}

export default CardSelectMarried


