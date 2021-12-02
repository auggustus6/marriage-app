import React from "react";
import {
  Container,
} from './styles';

export type AvatarProps = {
  width: number;
  height: number;
  borderColor?: string;
}

const Avatar = ({
  width,
  height,
  borderColor
}: AvatarProps) => {
  return (
    <Container 
      width={width}
      height={height}
      borderColor={borderColor}
    />
  )
}

export default Avatar


