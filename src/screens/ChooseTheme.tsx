/* eslint-disable @typescript-eslint/no-use-before-define */
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import React, { useContext } from 'react';
import { StyleSheet, Text } from 'react-native';
import { ThemeProvider } from 'styled-components';

import { ThemeContext } from '../contexts/ThemeContext';
import {
  Container,
  ThemeButtonLight,
  ThemeEmoji,
  ThemeTitle,
  ThemeButtonDark,
  BtnContainer,
  BtnText,
  TouchableBtn,
} from '../styles/screens/ChooseTheme';
import light from '../styles/themes/light';

export default function ChooseTheme() {
  const {
    theme, setTheme, setToLight, setToDark,
  } = useContext(ThemeContext);

  const navigation = useNavigation();

  function handleConfirm() {
    navigation.navigate('UserIdentification');
  }

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <ThemeEmoji>🌓</ThemeEmoji>
        <ThemeTitle>
          First
          {'\n'}
          choose a theme to use
          {'\n'}
          in the App
        </ThemeTitle>
        <BtnContainer>
          <ThemeButtonLight
            activeOpacity={0.6}
            onPress={() => setToLight(setTheme)}
          >
            <Text style={{ fontFamily: light.fonts.heading, fontSize: 16 }}>
              Light
            </Text>
          </ThemeButtonLight>
          <ThemeButtonDark
            activeOpacity={0.6}
            onPress={() => setToDark(setTheme)}
          >
            <BtnText>Dark</BtnText>
          </ThemeButtonDark>
        </BtnContainer>
        <TouchableBtn activeOpacity={0.5} onPress={handleConfirm}>
          <Entypo name="chevron-right" style={styles.buttonIcon} />
        </TouchableBtn>
      </Container>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  buttonIcon: {
    fontSize: 40,
    color: light.colors.background,
  },
});
