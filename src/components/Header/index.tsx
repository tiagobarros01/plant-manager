import React from 'react';
import { View } from 'react-native';

import userImg from '../../assets/tiago.jpeg';
import {
  Wrapper, UserName, Greetings, UserImage,
} from './style';

export function Header() {
  return (
    <Wrapper>
      <View>
        <Greetings>Hi,</Greetings>
        <UserName>Tiago</UserName>
      </View>
      <UserImage source={userImg} />
    </Wrapper>
  );
}
