/* eslint-disable @typescript-eslint/no-use-before-define */
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { ThemeProvider } from 'styled-components';

import wateringImg from '../assets/watering.png';
import { ThemeContext } from '../contexts/ThemeContext';
import {
  SubTitle,
  Title,
  Container,
  Image,
  TouchableButton,
  Wrapper,
} from '../styles/screens/Welcome';
import light from '../styles/themes/light';

function Welcome() {
  const { theme, setTheme, toggleTheme } = useContext(ThemeContext);

  // setTimeout(() => {
  //   toggleTheme(setTheme);
  // }, 1000);

  const navigation = useNavigation();

  function handleStart() {
    navigation.navigate('UserIdentification');
  }

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Wrapper>
          <Title>
            Manage
            {'\n'}
            your plants more
            {'\n'}
            easily
          </Title>

          <Image source={wateringImg} resizeMode="contain" />
          <SubTitle>
            Don&apos;t forget to water your plants anymore. We take care to remember you
            whenever you need.
          </SubTitle>
          <TouchableButton activeOpacity={0.7} onPress={handleStart}>
            <Entypo name="chevron-right" style={styles.buttonIcon} />
          </TouchableButton>
        </Wrapper>
      </Container>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  buttonIcon: {
    fontSize: 28,
    color: light.colors.background,
  },
});

export default Welcome;
