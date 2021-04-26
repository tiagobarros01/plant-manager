import styled from 'styled-components/native';

export const Text = styled.Text`
  color: ${(props) => props.theme.colors.darkGreen};
  font-family: ${(props) => props.theme.fonts.heading};
  margin-top: 16;
  margin-bottom: 16;
`;
