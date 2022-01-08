import React from "react";
import { useMarriage } from "../../hooks/useMarriage";
import { formatedNames } from "../../utils/formatedName";
import { AvatarUser } from "../AvatarUser";
import TitlePage from "../TitlePage";
import {
  Header,
} from './styles';

const HeadContent = ({ title }: { title: string }) => {
  const { marriage } = useMarriage();
  return (
    <Header>
      <TitlePage
        title={title ? title : formatedNames(marriage.fiancee, marriage.engaged)}
        subTitle={title}
      />
      <AvatarUser />
    </Header>
  )
}

export default HeadContent


