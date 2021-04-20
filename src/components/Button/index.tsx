import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { BtnContainer, Text } from './style';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <BtnContainer
      activeOpacity={0.7}
      {...rest}
    >
      <Text>
        { title }
      </Text>
    </BtnContainer>
  );
}
