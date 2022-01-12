import React from "react";
import { Feather } from '@expo/vector-icons'

import {
  FabContainer,
} from './styles';
import { RectButtonProps } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { useTheme } from "styled-components";

type FabButtonProps = RectButtonProps;

const FabButton = (props: FabButtonProps) => {
  const theme = useTheme();
  const tabBarHeight = useBottomTabBarHeight();
  return (
    <FabContainer
      {...props}
      tabBarHeight={tabBarHeight}>
      <Feather
        color={theme.colors.white}
        size={RFValue(30)}
        name="camera" />
    </FabContainer>
  )
}

export default FabButton


