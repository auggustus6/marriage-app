import React from "react";
import { useMarriage } from "../../hooks/useMarriage";
import {
  Presentation,
  Welcome,
  Title
} from './styles';

const WelcomePresentation = () => {
  const { marriage } = useMarriage();
  return (
    <Presentation>
      <Welcome>
        BEM-VINDO AO NOSSO CASAMENTO
      </Welcome>

      {marriage?.id &&
        <Title>
        {marriage.fiancee + ' & ' + marriage.engaged}
        </Title>
      }
    </Presentation>
  )
}

export default WelcomePresentation


