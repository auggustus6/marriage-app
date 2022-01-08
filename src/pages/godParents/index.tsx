import React, { useState } from "react";
import {
  Container,
  ListCards
} from './styles';
import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components";
import HeadContent from "../../components/HeadContent";
import CardParents from "./cardParents";
import PageContainer from "../../components/PageContainer";
import { ListRenderItem } from "react-native";

export type GodParentsDataProps = {
  id: string;
  name: string;
  photo: string;
  description: string;
}

const GodParents = () => {
  const [parents, setParents] = useState<GodParentsDataProps[]>([
    {
      id: '1',
      name: "Lucas e Bruna",
      photo: "https://media.istockphoto.com/photos/mature-indian-couple-hugging-and-looking-at-camera-picture-id1319763174?b=1&k=20&m=1319763174&s=170667a&w=0&h=QuOn6N4K-TMDr6lm_Q_BbrVoMxdpuPJnB-ipU-ZO1ck=",
      description: "Ainda assim, existem dúvidas a respeito de como o acompanhamento das preferências de consumo pode nos levar a considerar a reestruturação das novas proposições. Todavia, a estrutura atual da organização oferece uma interessante oportunidade para verificação dos modos de operação convencionais."
    },
    {
      id: '2',
      name: "Fernando e Maria",
      photo: "https://previews.123rf.com/images/wavebreakmediamicro/wavebreakmediamicro1507/wavebreakmediamicro150739094/42517940-happy-couple-smiling-at-the-beach.jpg",
      description: "É importante questionar o quanto a estrutura atual da organização nos obriga à análise dos procedimentos normalmente adotados. Ainda assim, existem dúvidas a respeito de como o aumento do diálogo entre os diferentes setores produtivos oferece uma interessante oportunidade para verificação de alternativas às soluções ortodoxas."
    },
    {
      id: '3',
      name: "Thiago e Antonia",
      photo: "https://img.freepik.com/free-photo/happy-couple-having-fun-together_13339-285572.jpg?size=626&ext=jpg",
      description: "A prática cotidiana prova que o entendimento das metas propostas nos obriga à análise dos procedimentos normalmente adotados. Gostaria de enfatizar que o comprometimento entre as equipes oferece uma interessante oportunidade para verificação de alternativas às soluções ortodoxas."
    },
    {
      id: '4',
      name: "Fábio e Vanessa",
      photo: "https://media.istockphoto.com/photos/nothing-inspires-happiness-like-love-picture-id1094338222?k=20&m=1094338222&s=612x612&w=0&h=UNF_HjevajXcjIb2l_3hIYI7ZJuPRpWj-VRYxTH8fFU=",
      description: "O empenho em analisar a expansão dos mercados mundiais estimula a padronização dos índices pretendidos. A nível organizacional, a crescente influência da mídia acarreta um processo de reformulação e modernização do levantamento das variáveis envolvidas."
    },
    {
      id: '5',
      name: "Gustavo e Larissa",
      photo: "https://images.pexels.com/photos/888894/pexels-photo-888894.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      description: "Nunca é demais lembrar o peso e o significado destes problemas, uma vez que a expansão dos mercados mundiais facilita a criação das formas de ação. Por outro lado, o aumento do diálogo entre os diferentes setores produtivos não pode mais se dissociar das posturas dos órgãos dirigentes com relação às suas atribuições."
    },
    {
      id: '6',
      name: "Marcelo e Marcela",
      photo: "https://media.istockphoto.com/photos/portrait-of-a-young-couple-relaxing-together-at-home-picture-id1324274498?b=1&k=20&m=1324274498&s=170667a&w=0&h=bqOQt9wUkjnypE8xht5EnjHO4bIe20dDh197drwF4wQ=",
      description: "Neste sentido, a estrutura atual da organização talvez venha a ressaltar a relatividade da gestão inovadora da qual fazemos parte. Desta maneira, o julgamento imparcial das eventualidades é uma das consequências do impacto na agilidade decisória."
    },
  ])
  const theme = useTheme();

  const renderCardParentsRow: ListRenderItem<GodParentsDataProps> = ({ item }) => (
    <CardParents {...item} />
  );

  return (
    <PageContainer
      title="Os Padrinhos">
      <ListCards<any>
        horizontal
        keyExtractor={(item:any) => String(item.id)}
        renderItem={renderCardParentsRow}
        showsHorizontalScrollIndicator={false}
        data={parents}
        contentContainerStyle={{ marginTop: RFValue(20), paddingHorizontal: RFValue(10) }}
      />
    </PageContainer>
  )
}

export default GodParents


