/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable react/require-default-props */
import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { ThemeContext } from '../../contexts/ThemeContext';
import dark from '../../styles/themes/dark';
import light from '../../styles/themes/light';
import { Text, TextActive } from './style';

interface EnvironmentButtonProps extends RectButtonProps {
  title: string;
  active?: boolean;
}

export function EnvironmentButton({
  title,
  active = false,
  ...rest
}: EnvironmentButtonProps) {
  const { theme } = useContext(ThemeContext);
  const verifyTheme = theme.title === 'light';

  return (
    <RectButton
      style={[
        verifyTheme ? styles.containerLight : styles.containerDark,
        active && styles.containerActive,
      ]}
      {...rest}
    >
      {!active ? <Text>{title}</Text> : <TextActive>{title}</TextActive>}
    </RectButton>
  );
}

const styles = StyleSheet.create({
  containerLight: {
    height: 40,
    width: 90,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    backgroundColor: light.colors.primary,
    marginHorizontal: 5,
  },
  containerDark: {
    height: 40,
    width: 90,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    backgroundColor: dark.colors.primary,
    marginHorizontal: 5,
  },
  containerActive: {
    backgroundColor: light.colors.green,
  },
});
