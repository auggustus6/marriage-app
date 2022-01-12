import React, { useEffect } from "react";
import { launchCamera } from 'react-native-image-picker';
import Post from "../../components/Post";
import {
  Container,
  ListCards,
} from './styles';
import { useMarriage } from "../../hooks/useMarriage";
import { useMural } from "../../hooks/useMural";
import { useNavigation } from "@react-navigation/native";
import FabButton from "../../components/FabButton";
import PageContainer from "../../components/PageContainer";
import { useUser } from "../../hooks/useUser";


const Mural = () => {
  const { navigate } = useNavigation();
  const { marriage } = useMarriage();
  const { user } = useUser();
  const { loadMural, murals, loading } = useMural();


  useEffect(() => {
    loadMural(marriage?.marriage_id!);
  }, [marriage?.id]);

  const handleLaunchCamera = async () => {

    try {
      const result = await launchCamera({
        mediaType: "photo",
        quality: 1,
        saveToPhotos: false,
      });

      if (result.errorCode) throw new Error(result.errorMessage);

      if (result.didCancel) return;

      if (result.assets) {
        const dataFileCamera = result.assets[0];
        const file = {
          name: dataFileCamera.fileName!,
          type: dataFileCamera.type!,
          size: dataFileCamera.fileSize!,
          uri: dataFileCamera.uri
        }
        navigate('CapturePhoto' as never, {
          photoFile: file,
          photoUri: dataFileCamera.uri
        } as never);
      }

    } catch (err) {
    }
  }

  return (
    <Container>
    <PageContainer title="O Mural"/>
        <ListCards<any>
          data={murals}
          keyExtractor={(item: any) => String(item.id)}
          renderItem={({ item }: any) => <Post key={item.id} {...item} />}
          showsVerticalScrollIndicator={false}
          refreshing={loading}
          onRefresh={() => loadMural(marriage?.marriage_id!)}
        />
        {(user.user_id || user.id) && <FabButton onPress={handleLaunchCamera} />}
      </Container>
   
  )
}

export default Mural


