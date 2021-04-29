/* eslint-disable quotes */
import DateTimePicker, { Event } from '@react-native-community/datetimepicker';
import { useNavigation, useRoute } from '@react-navigation/core';
import { isBefore } from 'date-fns';
import { format } from 'date-fns/esm';
import React, { useContext, useState } from 'react';
import { Alert, Platform } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SvgFromUri } from 'react-native-svg';

import waterDrop from '../assets/waterdrop.png';
import { Button } from '../components/Button';
import { ThemeContext } from '../contexts/ThemeContext';
import { PlantProps, SavePlant } from '../libs/storage';
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
import dark from '../styles/themes/dark';
import light from '../styles/themes/light';

interface Params {
  plant: PlantProps;
}

export default function PlantSave() {
  const { theme } = useContext(ThemeContext);
  const verifyTheme = theme.title === 'light';

  const [selectedDateTime, setSelectedDateTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(Platform.OS === 'ios');

  const navigation = useNavigation();

  const { plant } = useRoute().params as Params;

  function handleChangeTime(event: Event, dateTime: Date | undefined) {
    if (Platform.OS === 'android') {
      setShowDatePicker((prevState) => !prevState);
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
    setShowDatePicker((prevState) => !prevState);
  }

  async function handleSave() {
    try {
      await SavePlant({
        ...plant,
        dateTimeNotification: selectedDateTime,
      });

      navigation.navigate('Confirmation', {
        title: 'Very well',
        subtitle: `Don't worry, that we'll always remind you to take care of your plant very carefully`,
        buttonTitle: 'Thank you',
        icon: 'grinning',
        nextScreen: 'MyPlants',
      });
    } catch (error) {
      Alert.alert('Cant save! 😢');
      console.log(error);
    }
  }

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: light.colors.primary,
      }}
    >
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
              textColor={verifyTheme ? '#222' : '#fff'}
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
    </ScrollView>
  );
}
