import React, { useState } from "react";
import Icon from "@expo/vector-icons/MaterialIcons";
import CustomInput from "../../../components/Form/CustomInput";
import {
  Container,
  ImageBackground,
  ContainerInput,
  CustomContainerInput,
  IconContainer
} from './styles';
import { RFValue } from "react-native-responsive-fontsize";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { GlobalRoutesParams } from "../../../routes/globalRoutes";
import { useMural } from "../../../hooks/useMural";

const urlDefault = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlhCKYB9NLvGfTTbqjqi_a2M7ZUM79yc48VQ&usqp=CAU"

const CapturePhoto = ({ route, navigation }: NativeStackScreenProps<GlobalRoutesParams>) => {
  const { params }: any = route;
  const [description, setDescription] = useState('');

  const { handleAddMural, loading } = useMural()

  const handlePressAddMural = async () => {
    try {
      await handleAddMural(params.photoFile, description);
      setDescription("");
      navigation.goBack();
    } catch (err) {
    }
  }

  return (
    <Container>
      <ImageBackground source={{ uri: params ? params.photoUri : urlDefault }} resizeMode="cover">
        <ContainerInput>
          <CustomContainerInput>
            <CustomInput
              placeholder="Descrição foto"
              placeholderTextColor={'#000'}
              value={description}
              onChangeText={setDescription}
            />
          </CustomContainerInput>
          <IconContainer
          enabled={!loading}
          onPress={handlePressAddMural}>
            <Icon name="send" size={RFValue(30)} color={'#fff'} />
          </IconContainer>
        </ContainerInput>
      </ImageBackground>
    </Container>
  )
}

export default CapturePhoto


