/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable react/require-default-props */
import React from 'react';
import { StyleSheet } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import light from '../../styles/themes/light';
import { Text, TextActive } from './style';

interface EnvironmentButtonProps extends RectButtonProps {
  title: string;
  active?: boolean;
}

export function EnvironmentButton({ title, active = false, ...rest }: EnvironmentButtonProps) {
  return (
    <RectButton
      style={[
        styles.container,
        active && styles.containerActive,
      ]}
      {...rest}
    >
      {!active ? (
        <Text>
          { title }
        </Text>
      ) : (
        <TextActive>
          { title }
        </TextActive>
      )}
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: 90,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    backgroundColor: light.colors.shape,
    marginHorizontal: 5,
  },
  containerActive: {
    backgroundColor: light.colors.lightGreen,
  },
});
