/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import { StyleSheet } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { SvgFromUri } from 'react-native-svg';

import light from '../../styles/themes/light';
import {
  Details, Title, TimeLabel, Time,
} from './style';

interface PlantProps extends RectButtonProps {
  data: {
    name: string;
    photo: string;
    hour: string;
  }
}

export function PlantCardSecondary({ data, ...rest }: PlantProps) {
  return (
    <RectButton
      style={styles.container}
      {...rest}
    >
      <SvgFromUri uri={data.photo} width={70} height={70} />
      <Title>
        {data.name}
      </Title>
      <Details>
        <TimeLabel>
          Water at
        </TimeLabel>
        <Time>
          {data.hour}
        </Time>
      </Details>
    </RectButton>
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
    backgroundColor: light.colors.shape,
    marginVertical: 5,
  },
});
