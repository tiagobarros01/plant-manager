/* eslint-disable quotes */
import { formatDistance } from 'date-fns/esm';
import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import waterDrop from '../assets/waterdrop.png';
import { Header } from '../components/Header';
import { Load } from '../components/Load';
import { PlantCardSecondary } from '../components/PlantCardSecondary';
import {
  loadPlant, PlantProps, removePlant,
} from '../libs/storage';
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
  const [nextWatered, setNextWatered] = useState<string>();

  function handleRemove(plant: PlantProps) {
    Alert.alert('Remove', `Want to remove the ${plant.name}?`, [
      {
        text: 'No',
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress: async () => {
          try {
            await removePlant(plant.id);

            setMyPlants((prevState) => (
              prevState.filter((item) => item.id !== plant.id)
            ));
          } catch (error) {
            Alert.alert(`Couldn't be removed`);
            console.log(error);
          }
        },
      },
    ]);
  }

  useEffect(() => {
    async function loadStorageData() {
      const plantsStoraged = await loadPlant();

      const nextTime = formatDistance(
        new Date(plantsStoraged[0].dateTimeNotification).getTime(),
        new Date().getTime(),
      );

      setNextWatered(`Don't forget to water the ${plantsStoraged[0].name} at ${nextTime}`);
      setMyPlants(plantsStoraged);
      setLoading(false);
    }
    loadStorageData();
  }, []);

  if (loading) {
    return (
      <Load />
    );
  }

  return (
    <MyPlantsContainer>
      <Header />
      <Spotlight>
        <SpotlightImage source={waterDrop} />
        <SpotlightText>
          {nextWatered}
        </SpotlightText>
      </Spotlight>
      <Plants>
        <PlantsTitle>
          Next watered
        </PlantsTitle>

        <FlatList
          data={myPlants}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <PlantCardSecondary
              data={item}
              handleRemove={() => { handleRemove(item); }}
            />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flex: 1 }}
        />
      </Plants>
    </MyPlantsContainer>
  );
}
