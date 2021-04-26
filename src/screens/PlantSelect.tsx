/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import { EnvironmentButton } from '../components/EnvironmentButton';
import { Header } from '../components/Header';
import api from '../services/api';
import {
  PlantSelectContainer, Title, SubTitle, HeaderContainer,
} from '../styles/screens/PlantSelect';

interface EnvironmentsProps {
  key: string;
  title: string;
}

export default function PlantSelect() {
  const [environments, setEnvironments] = useState<EnvironmentsProps[]>();

  useEffect(() => {
    (async function fetchEnvironment() {
      const { data } = await api.get('plants_environments');
      setEnvironments([
        {
          key: 'all',
          title: 'All',
        },
        ...data,
      ]);
    }());
  });

  return (
    <PlantSelectContainer>
      <HeaderContainer>
        <Header />
        <Title>
          In what environment
        </Title>
        <SubTitle>
          do you want to place your plant?
        </SubTitle>
      </HeaderContainer>
      <View>
        <FlatList
          data={environments}
          renderItem={({ item }) => (
            <EnvironmentButton title={item.title} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.environmentList}
        />
      </View>
    </PlantSelectContainer>
  );
}

const styles = StyleSheet.create({
  environmentList: {
    height: 40,
    justifyContent: 'center',
    paddingBottom: 5,
    marginLeft: 32,
    marginVertical: 32,
  },
});
