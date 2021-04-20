import React from 'react';

import {
  Container,
  Wrapper,
  Form,
  Emoji,
  Input,
  Title,
} from '../styles/screens/UserIdentification';

export default function UserIdentification() {
  return (
    <Container>
      <Wrapper>
        <Form>
          <Emoji>
            😄
          </Emoji>
          <Title>
            Como podemos
            {'\n'}
            chamar você?
          </Title>
          <Input />
        </Form>
      </Wrapper>
    </Container>
  );
}
