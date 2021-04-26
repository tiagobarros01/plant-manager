import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import userImg from '../../assets/tiago.jpeg';
import {
  Wrapper, UserName, Greetings, UserImage,
} from './style';

export function Header() {
  const [userName, setUserName] = useState<string>();

  async function loadStorageUserName() {
    const user = await AsyncStorage.getItem('@plantManager:user');
    setUserName(user || '');
  }

  useEffect(() => {
    loadStorageUserName();
  }, []);

  return (
    <Wrapper>
      <View>
        <Greetings>Hi,</Greetings>
        <UserName>{userName}</UserName>
      </View>
      <UserImage source={userImg} />
    </Wrapper>
  );
}
