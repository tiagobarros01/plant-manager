/* eslint-disable import/extensions */
import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { TouchableButton, ButtonText } from './style';

interface ButtonProps extends TouchableOpacityProps {
  title: string
}

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <TouchableButton
      activeOpacity={0.4}
      {...rest}
    >
      <ButtonText>
        {title}
      </ButtonText>
    </TouchableButton>
  );
}
