/* eslint-disable @typescript-eslint/no-use-before-define */
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { ThemeProvider } from 'styled-components';

import wateringImg from '../assets/watering.png';
import {
  SubTitle,
  Title,
  Container,
  Image,
  TouchableButton,
  Wrapper,
} from '../styles/screens/Welcome';
import dark from '../styles/themes/dark';
import light from '../styles/themes/light';

function Welcome() {
  const [theme, setTheme] = useState(light);
  const { title } = theme;

  const toggleTheme = () => {
    setTheme(title === 'light' ? dark : light);
  };

  // setTimeout(() => {
  //   toggleTheme();
  // }, 1000);

  console.log(theme);

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
    color: light.colors.white,
  },
});

export default Welcome;
