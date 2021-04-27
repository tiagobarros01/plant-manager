/* eslint-disable @typescript-eslint/no-use-before-define */
import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import { EnvironmentButton } from '../components/EnvironmentButton';
import { Header } from '../components/Header';
import { Load } from '../components/Load';
import { PlantCardPrimary } from '../components/PlantCardPrimary';
import api from '../services/api';
import {
  PlantSelectContainer, Title, SubTitle, HeaderContainer, PlantsContainer,
} from '../styles/screens/PlantSelect';
import light from '../styles/themes/light';

interface EnvironmentsProps {
  key: string;
  title: string;
}

interface PlantsProps {
  id: string;
  name: string;
  about: string;
  water_tips: string;
  photo: string;
  environments: [string];
  frequency: {
    times: number;
    repeat_every: string;
  }
}

export default function PlantSelect() {
  const [environments, setEnvironments] = useState<EnvironmentsProps[]>([]);
  const [plants, setPlants] = useState<PlantsProps[]>([]);
  const [filteredPlants, setFilteredPlants] = useState<PlantsProps[]>([]);
  const [environmentActive, setEnvironmentActive] = useState('all');
  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);

  const navigation = useNavigation();

  function handleEnvironmentActive(environment: string) {
    setEnvironmentActive(environment);

    if (environment === 'all') {
      return setFilteredPlants(plants);
    }
    const filtered = plants.filter((plant) => plant.environments.includes(environment));
    setFilteredPlants(filtered);
  }

  function handlePlantSelect(plant: PlantsProps) {
    navigation.navigate('PlantSave', { plant });
  }

  async function fetchPlants() {
    const { data } = await api.get(`plants?_sort=name&_order=asc&_page=${page}&_limit=8`);

    if (!data) { return setLoading(true); }

    if (page > 1) {
      setPlants((prevState) => [...prevState, ...data]);
      setFilteredPlants((prevState) => [...prevState, ...data]);
    } else {
      setPlants(data);
      setFilteredPlants(data);
    }
    setLoading(false);
    setLoadingMore(false);
  }

  function handleFetchMore(distance: number) {
    if (distance < 1) return;

    setLoadingMore(true);
    setPage((prevState) => prevState + 1);
    fetchPlants();
  }

  async function fetchEnvironment() {
    const { data } = await api.get('plants_environments?_sort=title&_order=asc');
    setEnvironments([
      {
        key: 'all',
        title: 'All',
      },
      ...data,
    ]);
  }

  useEffect(() => {
    fetchPlants();
    fetchEnvironment();
  }, []);

  if (loading) {
    return (
      <Load />
    );
  }

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
          keyExtractor={(item) => String(item.key)}
          renderItem={({ item }) => (
            <EnvironmentButton
              title={item.title}
              active={item.key === environmentActive}
              onPress={() => handleEnvironmentActive(item.key)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.environmentList}
        />
      </View>
      <PlantsContainer>
        <FlatList
          data={filteredPlants}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <PlantCardPrimary
              data={item}
              onPress={() => handlePlantSelect(item)}
            />
          )}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          onEndReachedThreshold={0.1}
          onEndReached={({ distanceFromEnd }) => handleFetchMore(distanceFromEnd)}
          ListFooterComponent={
            loadingMore
              ? <ActivityIndicator color={light.colors.green} />
              : <></>
          }
        />
      </PlantsContainer>
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
