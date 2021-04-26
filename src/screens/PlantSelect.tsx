import React from 'react';
import { StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import { EnvironmentButton } from '../components/EnvironmentButton';
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
          In what environment
        </Title>
        <SubTitle>
          do you want to place your plant?
        </SubTitle>
      </HeaderContainer>
      <View>
        <FlatList
          data={[1, 2, 3, 4, 5]}
          renderItem={({ item }) => (
            <EnvironmentButton title="beth" active />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.environmentList}
        />
      </View>
    </PlantSelectContainer>
  );
}

const styles = StyleSheet.create({
  environmentList: {
    height: 40,
    justifyContent: 'center',
    paddingBottom: 5,
    marginLeft: 32,
    marginVertical: 32,
  },
});
