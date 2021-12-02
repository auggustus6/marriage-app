import React from "react";
import { Fab, Icon } from "native-base"
import PageContainer from "../../components/PageContainer";
import Post from "../../components/Post";
import { MaterialIcons } from '@expo/vector-icons';

import {
  FabContainer,
  LabelButton,
} from './styles';


const Mural = () => {
  return (
    <PageContainer>
      {[0, 1, 2, 3, 4, 5].map(item => (<Post key={item} />))}
      {/* <FabContainer>
      <Fab
        borderRadius="full"
        colorScheme="red"
        placement="bottom-right"
        icon={
          <Icon
            color="white"
            as={<MaterialIcons name="picture-in-picture" />}
            size="4"
          />
        }
        label={<LabelButton>Cadê sua foto?</LabelButton>}
      />
      </FabContainer> */}

    </PageContainer>
  )
}

export default Mural


