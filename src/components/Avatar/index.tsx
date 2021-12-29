import React from "react";
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
      height={height}
      resizeMode="cover"
      source={{ uri: couplePhoto }}
      borderColor={borderColor}
    />
  )
}

export default Avatar


