/* eslint-disable import/extensions */
import React from 'react';
import {
  Text, Image, TouchableOpacity,
} from 'react-native';

import wateringImg from '../assets/watering.png';
import { Title, Wrapper } from '../styles/screens/Welcome';

export function Welcome() {
  return (
    <Wrapper>
      <Title>Gerencie suas plantas de forma fácil</Title>

      <Image source={wateringImg} />
      <Text>
        Não esqueça mais de regar suas plantas.
        Nós cuidamos de lembrar você sempre que precisar.
      </Text>

      <TouchableOpacity>
        <Text>
          {'>'}
        </Text>
      </TouchableOpacity>
    </Wrapper>
  );
}
