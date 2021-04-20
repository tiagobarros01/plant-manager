import styled from 'styled-components/native';

export const BtnContainer = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.green};
  height: 56;
  border-radius: 16;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  font-size: 16;
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.heading};
`;
