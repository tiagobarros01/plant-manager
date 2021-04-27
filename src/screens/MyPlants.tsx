import { formatDistance } from 'date-fns/esm';
import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';

import waterDrop from '../assets/waterdrop.png';
import { Text } from '../components/EnvironmentButton/style';
import { Header } from '../components/Header';
import { PlantCardSecondary } from '../components/PlantCardSecondary';
import { loadPlant, PlantProps } from '../libs/storage';
import {
  SpotlightImage,
  SpotlightText,
  MyPlantsContainer,
  Spotlight,
  Plants,
  PlantsTitle,
} from '../styles/screens/MyPlants';

export default function MyPlants() {
  const [myPlants, setMyPlants] = useState<PlantProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [nextWaterd, setNextWaterd] = useState<string>();

  async function loadStorageData() {
    const plantsStoraged = await loadPlant();

    const nextTime = formatDistance(
      new Date(plantsStoraged[0].dateTimeNotification).getTime(),
      new Date().getTime(),
    );

    setNextWaterd(`Don't forget to water the ${plantsStoraged[0].name} at ${nextTime}`);
    setMyPlants(plantsStoraged);
    setLoading(false);
  }

  useEffect(() => {
    loadStorageData();
  }, []);

  return (
    <MyPlantsContainer>
      <Header />
      <Spotlight>
        <SpotlightImage source={waterDrop} />
        <SpotlightText>
          {nextWaterd}
        </SpotlightText>
      </Spotlight>
      <Plants>
        <PlantsTitle>
          Next waterd
        </PlantsTitle>

        <FlatList
          data={myPlants}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <PlantCardSecondary
              data={item}
            />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flex: 1 }}
        />
      </Plants>
    </MyPlantsContainer>
  );
}
