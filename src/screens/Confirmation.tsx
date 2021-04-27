import { useNavigation, useRoute } from '@react-navigation/core';
import React from 'react';

import { Button } from '../components/Button';
import {
  CfmContainer,
  Emoji,
  Wrapper,
  SubTitle,
  Footer,
  Title,
} from '../styles/screens/Confirmation';

interface Params {
  title: string;
  subtitle: string;
  buttonTitle: string;
  icon: 'celebrating' | 'grinning';
  nextScreen: string;
}

const emojis = {
  grinning: '🤩',
  celebrating: '🥳',
};

export default function Confirmation() {
  const navigation = useNavigation();
  const {
    title,
    subtitle,
    buttonTitle,
    icon,
    nextScreen,
  } = useRoute().params as Params;

  function handleMoveOn() {
    navigation.navigate(nextScreen);
  }

  return (
    <CfmContainer>
      <Wrapper>
        <Emoji>{emojis[icon]}</Emoji>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
        <Footer>
          <Button
            title={buttonTitle}
            onPress={handleMoveOn}
          />
        </Footer>
      </Wrapper>
    </CfmContainer>
  );
}
