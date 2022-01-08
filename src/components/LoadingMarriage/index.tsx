import React, { useEffect, useRef } from "react";
import LottieView from 'lottie-react-native';
import { Animated, Easing } from 'react-native';
import {
  Container,
  Message
} from './styles';
import { useTheme } from "styled-components";
import { RFValue } from "react-native-responsive-fontsize";

const LoadingMarriage = () => {
  const theme = useTheme();
  const progress = useRef(new Animated.Value(0)).current;

  const load = () => {
    Animated.timing(progress,{
      toValue: 1,
      duration: 5000,
      easing: Easing.linear,
      useNativeDriver:true
    }).start(() => load());
  }

  useEffect(()=>{
    load();
  }, [])

  return (
    <Container>
      <LottieView
      style={{width: RFValue(450), height: RFValue(450)}}
      progress={progress}
      source={require('../../assets/animate/loading_animate.json')}   />
      {/* <Message>Carregando o casamento...</Message> */}
    </Container>
  )
}

export default LoadingMarriage


