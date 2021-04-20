/* eslint-disable import/extensions */
import React from 'react';

import wateringImg from '../assets/watering.png';
import {
  SubTitle,
  Title,
  Wrapper,
  Image,
  TouchableButton,
  ButtonText,
} from '../styles/screens/Welcome';

export function Welcome() {
  return (
    <Wrapper>
      <Title>
        Gerencie
        {'\n'}
        suas plantas
        {'\n'}
        de forma fácil

      </Title>

      <Image source={wateringImg} />
      <SubTitle>
        Não esqueça mais de regar suas plantas.
        Nós cuidamos de lembrar você sempre que precisar.
      </SubTitle>
      <TouchableButton
        activeOpacity={0.4}
      >
        <ButtonText>
          {'>'}
        </ButtonText>
      </TouchableButton>
    </Wrapper>
  );
}
