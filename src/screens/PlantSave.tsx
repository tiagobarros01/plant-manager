import DateTimePicker, { Event } from '@react-native-community/datetimepicker';
import { useRoute } from '@react-navigation/core';
import { isBefore } from 'date-fns';
import React, { useState } from 'react';
import { Alert, Platform } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
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
  DateTimePickerText,
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
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());
  const [showDatePicker, setshowDatePicker] = useState(Platform.OS === 'ios');

  const { plant } = useRoute().params as Params;

  function handleChangeTime(event: Event, dateTime: Date | undefined) {
    if (Platform.OS === 'android') {
      setshowDatePicker((prevState) => !prevState);
    }

    if (dateTime && isBefore(dateTime, new Date())) {
      setSelectedDateTime(new Date());
      return Alert.alert('select an hour in the future! ⏰');
    }

    if (dateTime) {
      setSelectedDateTime(dateTime);
    }
  }

  function handleOpenDateTimePickerForAndroid() {

  }

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

        { showDatePicker && (
        <DateTimePicker
          value={selectedDateTime}
          mode="time"
          display="spinner"
          onChange={handleChangeTime}
        />
        )}

        {
          Platform.OS === 'android' && (
            <TouchableOpacity
              onPress={handleOpenDateTimePickerForAndroid}
            >
              <DateTimePickerText>
                Change hour
              </DateTimePickerText>
            </TouchableOpacity>
          )
        }

        <Button
          title="Sign plant"
          onPress={() => {}}
        />
      </Controller>
    </PlantSaveContainer>
  );
}
