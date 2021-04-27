import { useRoute } from '@react-navigation/core';
import React from 'react';
import { SvgFromUri } from 'react-native-svg';

import waterDrop from '../assets/waterdrop.png';
import { Button } from '../components/Button';
import {
  PlantSaveContainer,
  PlantName,
  PlantDetails,
  TipContainer,
  TipImage,
  TipText,
  AlertLabel,
  Controller,
  PlantInfo,
} from '../styles/screens/PlantSave';

interface Params {
  plant: {
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
}

export default function PlantSave() {
  const { plant } = useRoute().params as Params;

  return (
    <PlantSaveContainer>
      <PlantInfo>
        <SvgFromUri uri={plant.photo} height={150} width={150} />
        <PlantName>
          {plant.name}
        </PlantName>
        <PlantDetails>
          {plant.about}
        </PlantDetails>
      </PlantInfo>
      <Controller>
        <TipContainer>
          <TipImage source={waterDrop} />
          <TipText>
            {plant.water_tips}
          </TipText>
        </TipContainer>
        <AlertLabel>Select a best time to be remembered</AlertLabel>
        <Button
          title="Sign plant"
          onPress={() => {}}
        />
      </Controller>
    </PlantSaveContainer>
  );
}
