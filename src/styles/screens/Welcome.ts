import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { width } = Dimensions.get('window');

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Wrraper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-around;
  padding-left: 20px;
  padding-right: 20px;
`;

export const Title = styled.Text`
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  color: ${(props) => props.theme.colors.heading};
  margin-top: 30px;
  font-family: ${(props) => props.theme.fonts.heading};
  line-height: 34px;
`;

export const Image = styled.Image`
    width: 292px;
    height: ${`${width * 0.7}px`};
  `;

export const SubTitle = styled.Text`
  text-align: center;
  font-size: 18px;
  padding-left: 20px;
  padding-right: 20px;
  color: ${(props) => props.theme.colors.heading};
  font-family: ${(props) => props.theme.fonts.text};
  line-height: 25px;
`;

export const TouchableButton = styled.TouchableOpacity`
  background: ${(props) => props.theme.colors.green};
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  margin-bottom: 10px;
  height: 56px;
  width: 56px;
`;

export const ButtonIcon = styled.Text`
  color: ${(props) => props.theme.colors.white};
  font-size: 32px;
`;
