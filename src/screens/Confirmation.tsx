import { useNavigation } from '@react-navigation/core';
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

export default function Confirmation() {
  const navigation = useNavigation();

  function handleMoveOn() {
    navigation.navigate('PlantSelect');
  }

  return (
    <CfmContainer>
      <Wrapper>
        <Emoji>🥳</Emoji>
        <Title>Ready</Title>
        <SubTitle>Now, let&apos;s start taking care of our plants!</SubTitle>
        <Footer>
          <Button
            title="Begin"
            onPress={handleMoveOn}
          />
        </Footer>
      </Wrapper>
    </CfmContainer>
  );
}
