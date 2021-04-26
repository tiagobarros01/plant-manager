import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

export const Wrapper = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-top: ${getStatusBarHeight()};

  padding-top: 20;
  padding-bottom: 20;
`;

export const Greetings = styled.Text`
  font-size: 32;
  color: ${(props) => props.theme.colors.heading};
  font-family: ${(props) => props.theme.fonts.text};
`;

export const UserName = styled.Text`
  font-size: 32;
  font-family: ${(props) => props.theme.fonts.heading};
  color: ${(props) => props.theme.colors.heading};
  line-height: 40;
`;

export const UserImage = styled.Image`
  width: 70;
  height: 70;

  border-radius: 35;
`;
