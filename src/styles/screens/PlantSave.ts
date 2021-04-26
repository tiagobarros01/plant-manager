import { getBottomSpace } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';

export const PlantSaveContainer = styled.View`
  flex: 1;
  justify-content: space-between;
  background: ${(props) => props.theme.colors.shape};
`;

export const PlantInfo = styled.View`
  flex: 1;
  padding-left: 30;
  padding-right: 30;
  padding-top: 50;
  padding-bottom: 50;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.colors.shape};
`;

export const PlantName = styled.Text`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: 24;
  color: ${(props) => props.theme.colors.heading};
  margin-top: 15;
`;

export const PlantDetails = styled.Text`
  text-align: center;
  font-family: ${(props) => props.theme.fonts.text};
  color: ${(props) => props.theme.colors.heading};
  font-size: 17;
  margin-top: 10;
`;

export const Controller = styled.View`
  background: ${(props) => props.theme.colors.white};

  padding-right: 20;
  padding-left: 20;
  padding-top: 20;
  padding-bottom: ${getBottomSpace() || 20};
`;

export const TipContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background: ${(props) => props.theme.colors.lightBlue};

  border-radius: 20;

  padding-right: 20;
  padding-left: 20;
  padding-top: 20;
  padding-bottom: 20;

  position: relative;
  bottom: 60;
`;

export const TipImage = styled.Image`
  width: 56;
  height: 56;
`;

export const TipText = styled.Text`
  flex: 1;
  margin-left: 20;
  font-family: ${(props) => props.theme.fonts.text};
  color: ${(props) => props.theme.colors.blue};
  font-size: 17;
  text-align: justify;
`;

export const AlertLabel = styled.Text`
  text-align: center;
  font-family: ${(props) => props.theme.fonts.complement};
  color: ${(props) => props.theme.colors.heading};
  font-size: 12;
  margin-bottom: 5;
`;
