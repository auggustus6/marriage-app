import React, { useEffect, useMemo } from "react";
import WelcomePresentation from "../../components/WelcomePresentation";
import Avatar from "../../components/Avatar";
import Button from "../../components/Button";
import {
  Container,
  Header,
  AvatarContainer,
  Content,
  Title,
  Days
} from './styles';
import { useTheme } from "styled-components";
import { differenceInDays } from 'date-fns';
import { useMarriage } from "../../hooks/useMarriage";
import { RFValue } from "react-native-responsive-fontsize";
import { useNavigation } from "@react-navigation/native";
import { useNetInfo } from '@react-native-community/netinfo';
import { synchronize } from '@nozbe/watermelondb/sync'
import { database } from "../../databases";

const Home = () => {
  const { marriage } = useMarriage();
  const { navigate } = useNavigation();
  const theme = useTheme();
  const netInfo = useNetInfo();
  const memoDaysOfMarriage = useMemo(() => {
    return marriage?.date ? differenceInDays(
      new Date(marriage.date),
      new Date(),
    ) : [];
  }, [marriage.date]);


  // const offlineSync = async () => {
  //   await synchronize({
  //     database,
  //     // Backend to App
  //     pullChanges: async ({ lastPulledAt, schemaVersion, migration }) => {
  //       const urlParams = `last_pulled_at=${lastPulledAt}&schema_version=${schemaVersion}&migration=${encodeURIComponent(JSON.stringify(migration))}`
  //       const response = await fetch(`https://my.backend/sync?${urlParams}`)
  //       if (!response.ok) {
  //         throw new Error(await response.text())
  //       }

  //       const { changes, timestamp } = await response.json()
  //       return { changes, timestamp }
  //     },
  //     // App to Backend
  //     pushChanges: async ({ changes, lastPulledAt }) => {
  //       const response = await fetch(`https://my.backend/sync?last_pulled_at=${lastPulledAt}`, {
  //         method: 'POST',
  //         body: JSON.stringify(changes)
  //       })
  //       if (!response.ok) {
  //         throw new Error(await response.text())
  //       }
  //     },
  //     migrationsEnabledAtVersion: 1,
  //   })
  // }

  useEffect(() => {

  }, [netInfo.isConnected])

  return (
    <Container>
      <Header>
        <AvatarContainer>
          <Avatar
            width={RFValue(200)}
            height={RFValue(200)}
            couplePhoto={marriage?.couple_photo!}
            borderColor={theme.colors.secondary}
          />
        </AvatarContainer>
        <WelcomePresentation />
      </Header>

      <Content>
        <Title allowFontScaling={false} size="small">Faltam</Title>
        <Title allowFontScaling={false} size="large">{memoDaysOfMarriage}</Title>
        <Days>Dias</Days>

        <Button
          colorText={theme.colors.white}
          background={theme.colors.primary}
          onPress={() => navigate('Pix' as never)}
          transform="uppercase">
          Gravata do noivo
        </Button>
      </Content>
    </Container>
  )
}

export default Home


