import LottieView from 'lottie-react-native';
import React from 'react';
import { StyleSheet } from 'react-native';

import LoadAnimation from '../../assets/load.json';
import { LoadContainer } from './style';

export function Load() {
  return (
    <LoadContainer>
      <LottieView
        source={LoadAnimation}
        autoPlay
        loop
        style={styles.animation}
      />
    </LoadContainer>
  );
}

const styles = StyleSheet.create({
  animation: {
    backgroundColor: 'transparent',
    width: 200,
    height: 200,
  },
});
