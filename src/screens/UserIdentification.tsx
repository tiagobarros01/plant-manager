/* eslint-disable quotes */
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/core';
import React, { useContext, useState } from 'react';
import {
  Alert,
  Keyboard, Platform, TouchableWithoutFeedback,
} from 'react-native';

import { Button } from '../components/Button';
import { ThemeContext } from '../contexts/ThemeContext';
import {
  Container,
  Wrapper,
  Form,
  Emoji,
  Input,
  Title,
  Footer,
  KeyboardAvoid,
  Header,
} from '../styles/screens/UserIdentification';
import dark from '../styles/themes/dark';
import light from '../styles/themes/light';

export default function UserIdentification() {
  const { theme } = useContext(ThemeContext);
  const verifyTheme = theme.title === 'light';

  const navigation = useNavigation();

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState<string>();

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!name);
  }

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputChange(value: string) {
    setIsFilled(!!value);
    setName(value);
  }

  async function handleSubmit() {
    if (!name) {
      Alert.alert('Tell me how to call you 😢');
    } else {
      try {
        await AsyncStorage.setItem('@plantManager:user', name);
        navigation.navigate('Confirmation', {
          title: 'Ready',
          subtitle: `Now, let's start taking care of our plants!`,
          buttonTitle: 'Begin',
          icon: 'celebrating',
          nextScreen: 'PlantSelect',
        });
      } catch (error) {
        Alert.alert('Cant save your user name 😢');
        console.log(error);
      }
    }
  }

  return (
    <Container>
      <KeyboardAvoid behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Wrapper>
            <Form>
              <Header>
                <Emoji>{ isFilled ? '😄' : '🤔' }</Emoji>
                <Title>
                  How can we
                  {'\n'}
                  call you?
                </Title>
              </Header>

              <Input
                style={(
                  isFocused || isFilled
                ) && {
                  borderColor: verifyTheme ? light.colors.green : dark.colors.green,
                }}
                placeholder="Write your name"
                onChangeText={handleInputChange}
                onBlur={handleInputBlur}
                onFocus={handleInputFocus}
                maxLength={12}
                placeholderTextColor={verifyTheme ? light.colors.gray : dark.colors.gray}
              />
              <Footer>
                <Button title="Confirm" onPress={handleSubmit} />
              </Footer>
            </Form>
          </Wrapper>
        </TouchableWithoutFeedback>
      </KeyboardAvoid>
    </Container>
  );
}
