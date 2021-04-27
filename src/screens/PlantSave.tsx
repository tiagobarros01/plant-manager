import DateTimePicker, { Event } from '@react-native-community/datetimepicker';
import { useRoute } from '@react-navigation/core';
import { isBefore } from 'date-fns';
import { format } from 'date-fns/esm';
import React, { useState } from 'react';
import { Alert, Platform } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SvgFromUri } from 'react-native-svg';

import waterDrop from '../assets/waterdrop.png';
import { Button } from '../components/Button';
import { loadPlant, PlantProps, SavePlant } from '../libs/storage';
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
  DateTimePickerButton,
  DateTimePickerContainer,
} from '../styles/screens/PlantSave';

interface Params {
  plant: PlantProps;
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
      return Alert.alert('Select an hour in the future! ⏰');
    }

    if (dateTime) {
      setSelectedDateTime(dateTime);
    }
  }

  function handleOpenDateTimePickerForAndroid() {
    setshowDatePicker((prevState) => !prevState);
  }

  async function handleSave() {
    try {
      await SavePlant({
        ...plant,
        dateTimeNotification: selectedDateTime,
      });
    } catch (error) {
      Alert.alert('Cant save! 😢');
      console.log(error);
    }
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
          <DateTimePickerContainer>
            <DateTimePicker
              value={selectedDateTime}
              mode="time"
              display="spinner"
              onChange={handleChangeTime}
            />
          </DateTimePickerContainer>
        )}

        {
          Platform.OS === 'android' && (
            <DateTimePickerButton
              onPress={handleOpenDateTimePickerForAndroid}
            >
              <DateTimePickerText>
                {`Change ${format(selectedDateTime, 'HH:mm')}`}
              </DateTimePickerText>
            </DateTimePickerButton>
          )
        }

        <Button
          title="Sign plant"
          onPress={handleSave}
        />
      </Controller>
    </PlantSaveContainer>
  );
}
