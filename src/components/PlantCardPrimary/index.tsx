/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { SvgFromUri } from 'react-native-svg';

import { ThemeContext } from '../../contexts/ThemeContext';
import dark from '../../styles/themes/dark';
import light from '../../styles/themes/light';
import { Text } from './style';

interface PlantProps extends RectButtonProps {
  data: {
    name: string;
    photo: string;
  }
}

export function PlantCardPrimary({ data, ...rest }: PlantProps) {
  const { theme } = useContext(ThemeContext);
  const verifyTheme = theme.title === 'light';

  return (
    <RectButton
      style={verifyTheme ? styles.containerLight : styles.containerDark}
      {...rest}
    >
      <SvgFromUri uri={data.photo} width={90} height={90} />
      <Text>
        {data.name}
      </Text>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  containerLight: {
    flex: 1,
    maxWidth: '45%',
    backgroundColor: light.colors.primary,
    borderRadius: 20,
    paddingVertical: 10,
    alignItems: 'center',
    margin: 10,
  },
  containerDark: {
    flex: 1,
    maxWidth: '45%',
    backgroundColor: dark.colors.primary,
    borderRadius: 20,
    paddingVertical: 10,
    alignItems: 'center',
    margin: 10,
  },
});
