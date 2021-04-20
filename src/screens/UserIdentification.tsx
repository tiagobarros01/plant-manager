import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { Platform } from 'react-native';

import { Button } from '../components/Button';
import {
  Container,
  Wrapper,
  Form,
  Emoji,
  Input,
  Title,
  Footer,
  KeyboardAvoid,
  Header,
} from '../styles/screens/UserIdentification';
import light from '../styles/themes/light';

export default function UserIdentification() {
  const navigation = useNavigation();

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState<String>();

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!name);
  }

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputChange(value: string) {
    setIsFilled(!!value);
    setName(value);
  }

  function handleSubmit() {
    navigation.navigate('Confirmation');
  }

  return (
    <Container>
      <KeyboardAvoid behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <Wrapper>
          <Form>
            <Header>
              <Emoji>{ isFilled ? '😄' : '🤔' }</Emoji>
              <Title>
                How can we
                {'\n'}
                call you?
              </Title>
            </Header>

            <Input style={(isFocused || isFilled) && { borderColor: light.colors.green }} placeholder="Write your name" onChangeText={handleInputChange} onBlur={handleInputBlur} onFocus={handleInputFocus} />
            <Footer>
              <Button title="Confirm" onPress={handleSubmit} />
            </Footer>
          </Form>
        </Wrapper>
      </KeyboardAvoid>
    </Container>
  );
}
