import React from "react";
import { imageDefault } from "../../utils/imageDefault";
import {
  Container,
} from './styles';

export type AvatarProps = {
  width: number;
  height: number;
  couplePhoto?: string;
  borderColor?: string;
}

const Avatar = ({
  width,
  height,
  borderColor,
  couplePhoto
}: AvatarProps) => {
  return (
    <Container
      width={width}
      accessibilityRole="image"
      accessibilityLabel="Icone de imagem do usuário"
      height={height}
      resizeMode="cover"
      source={{ uri: imageDefault(couplePhoto)   }}
      borderColor={borderColor}
    />
  )
}

export default Avatar


