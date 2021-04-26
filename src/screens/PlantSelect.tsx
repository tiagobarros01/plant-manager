import React from 'react';

import { Header } from '../components/Header';
import {
  PlantSelectContainer, Title, SubTitle, HeaderContainer,
} from '../styles/screens/PlantSelect';

export default function PlantSelect() {
  return (
    <PlantSelectContainer>
      <HeaderContainer>
        <Header />
        <Title>
          In what environnement
        </Title>
        <SubTitle>
          do you want to place your plant?
        </SubTitle>
      </HeaderContainer>
    </PlantSelectContainer>
  );
}
