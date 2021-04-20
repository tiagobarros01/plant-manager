/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable import/extensions */
import { Entypo } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text } from 'react-native';

import wateringImg from '../assets/watering.png';
import {
  SubTitle,
  Title,
  Wrapper,
  Image,
  TouchableButton,
} from '../styles/screens/Welcome';
import light from '../styles/themes/light';

export function Welcome() {
  return (
    <Wrapper>
      <Title>
        Gerencie
        {'\n'}
        suas plantas de
        {'\n'}
        forma fácil

      </Title>

      <Image source={wateringImg} resizeMode="contain" />
      <SubTitle>
        Não esqueça mais de regar suas plantas.
        Nós cuidamos de lembrar você sempre que precisar.
      </SubTitle>
      <TouchableButton
        activeOpacity={0.7}
      >
        <Text>
          <Entypo name="chevron-right" style={styles.buttonIcon} />
        </Text>
      </TouchableButton>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  buttonIcon: {
    fontSize: 28,
    color: light.colors.white,
  },
});
