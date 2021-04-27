import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

export const Wrapper = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-top: ${`${getStatusBarHeight()}px`};

  padding-top: 20px;
  padding-bottom: 20px;
`;

export const Greetings = styled.Text`
  font-size: 32px;
  color: ${(props) => props.theme.colors.heading};
  font-family: ${(props) => props.theme.fonts.text};
`;

export const UserName = styled.Text`
  font-size: 32px;
  font-family: ${(props) => props.theme.fonts.heading};
  color: ${(props) => props.theme.colors.heading};
  line-height: 40px;
`;

export const UserImage = styled.Image`
  width: 70px;
  height: 70px;

  border-radius: 35px;
`;
