import styled from 'styled-components/native';

export const Title = styled.Text`
  flex: 1;
  margin-left: 10px;
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: 17px;
  color: ${(props) => props.theme.colors.heading};
`;

export const Details = styled.View`
  align-items: flex-end;
`;

export const TimeLabel = styled.Text`
  font-size: 16px;
  font-family: ${(props) => props.theme.fonts.text};
  color: ${(props) => props.theme.colors.lightBody};
`;

export const Time = styled.Text`
  margin-top: 5px;
  font-size: 16px;
  font-family: ${(props) => props.theme.fonts.heading};
  color: ${(props) => props.theme.colors.darkBody}
`;
