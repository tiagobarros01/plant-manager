/* eslint-disable @typescript-eslint/no-use-before-define */
import { Feather } from '@expo/vector-icons';
import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Animated from 'react-native-reanimated';
import { SvgFromUri } from 'react-native-svg';

import { ThemeContext } from '../../contexts/ThemeContext';
import dark from '../../styles/themes/dark';
import light from '../../styles/themes/light';
import {
  Details, Title, TimeLabel, Time,
} from './style';

interface PlantProps extends RectButtonProps {
  data: {
    name: string;
    photo: string;
    hour: string;
  };
  handleRemove: () => void;
}

export function PlantCardSecondary({
  data,
  handleRemove,
  ...rest
}: PlantProps) {
  const { theme } = useContext(ThemeContext);
  const verifyTheme = theme.title === 'light';

  return (
    <Swipeable
      overshootRight={false}
      renderRightActions={() => (
        <Animated.View>
          <View>
            <RectButton style={styles.btnRemove} onPress={handleRemove}>
              <Feather name="trash" size={32} color={light.colors.background} />
            </RectButton>
          </View>
        </Animated.View>
      )}
    >
      <RectButton
        style={[
          verifyTheme
            ? { backgroundColor: light.colors.primary }
            : { backgroundColor: dark.colors.primary }, styles.container,
        ]}
        {...rest}
      >
        <SvgFromUri uri={data.photo} width={70} height={70} />
        <Title>{data.name}</Title>
        <Details>
          <TimeLabel>Water at</TimeLabel>
          <Time>{data.hour}</Time>
        </Details>
      </RectButton>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 25,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  btnRemove: {
    width: 100,
    height: 100,
    backgroundColor: light.colors.red,
    marginTop: 15,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    right: 20,
    paddingLeft: 15,
  },
});
