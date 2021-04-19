import styled from 'styled-components/native';

export const TouchableButton = styled.TouchableOpacity`
  background: ${(props) => props.theme.colors.green};
  justify-content: center;
  align-items: center;
  border-radius: 16;
  margin-bottom: 10;
  height: 56;
  width: 56;
`;

export const ButtonText = styled.Text`
  color: ${(props) => props.theme.colors.white};
  font-size: 24;
`;
