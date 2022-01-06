import React, { useEffect } from "react";
import { Fab, Icon } from "native-base"
import { launchCamera } from 'react-native-image-picker';
import Post from "../../components/Post";

import {
  Header,
  ListCards,
} from './styles';
import { useMarriage } from "../../hooks/useMarriage";
import { useMural } from "../../hooks/useMural";
import TitlePage from "../../components/TitlePage";
import { AvatarUser } from "../../components/AvatarUser";
import { useNavigation } from "@react-navigation/native";
import FabButton from "../../components/FabButton";
import { formatedNames } from "../../utils/formatedName";
import { ActivityIndicator } from "react-native";
import { useAuth } from "../../hooks/useAuth";

const HeadContent = ({ fiancee, engaged }: { fiancee: string, engaged: string }) => {
  return (
    <Header>
      <TitlePage
        title={formatedNames(fiancee, engaged)}
        subTitle={"O Mural"}
      />
      <AvatarUser />
    </Header>
  )
}

const Mural = () => {
  const { navigate } = useNavigation();
  const { marriage } = useMarriage();
  const { user } = useAuth();
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
      console.log(err);
    }
  }

  return (
    <>
      <ListCards
        ListHeaderComponent={<HeadContent engaged={marriage.engaged} fiancee={marriage.fiancee} />}
        data={murals}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <Post key={item.id} {...item} />}
        showsVerticalScrollIndicator={false}
        refreshing={loading}
        onRefresh={() => loadMural(marriage?.marriage_id!)}
      />
      {(user.user_id || user.id) && <FabButton onPress={handleLaunchCamera} />}
    </>
  )
}

export default Mural


