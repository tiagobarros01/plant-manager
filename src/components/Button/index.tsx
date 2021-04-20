import React from 'react';

import { BtnContainer, Text } from './style';

export function Button() {
  return (
    <BtnContainer
      activeOpacity={0.7}
    >
      <Text>
        Confirm
      </Text>
    </BtnContainer>
  );
}
