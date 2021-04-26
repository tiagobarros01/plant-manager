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

export default function PlantSave() {
  return (
    <PlantSaveContainer>
      <PlantInfo>
        <SvgFromUri uri="" height={150} width={150} />
        <PlantName>
          Name of plant
        </PlantName>
        <PlantDetails>
          Plant Details
        </PlantDetails>
      </PlantInfo>
      <Controller>
        <TipContainer>
          <TipImage source={waterDrop} />
          <TipText>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </TipText>
        </TipContainer>
        <AlertLabel>Escolha</AlertLabel>
        <Button
          title="Sign plant"
          onPress={() => {}}
        />
      </Controller>
    </PlantSaveContainer>
  );
}
