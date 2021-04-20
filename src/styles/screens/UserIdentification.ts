import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;

export const KeyboardAvoid = styled.KeyboardAvoidingView`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;

export const Wrapper = styled.View`
  flex: 1;
  width: 100%;
`;

export const Form = styled.View`
  flex: 1;
  justify-content: center;
  padding-left: 54;
  padding-right: 54;
  align-items: center;
`;

export const Header = styled.View`
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 24;
  text-align: center;
  color: ${(props) => props.theme.colors.heading};
  font-family: ${(props) => props.theme.fonts.heading};
  line-height: 32;
  margin-top: 20;
`;

export const Emoji = styled.Text`
    font-size: 44;
`;

export const Input = styled.TextInput`
  border-bottom-width: 1;
  border-color: ${(props) => props.theme.colors.gray};
  color: ${(props) => props.theme.colors.heading};
  width: 100%;
  font-size: 18;
  margin-top: 50;
  padding-top: 10;
  padding-bottom: 10;
  padding-left: 10;
  padding-right: 10;
  text-align: center;
`;

export const Footer = styled.View`
  margin-top: 40;
  width: 100%;
  padding-left: 20;
  padding-right: 20;
`;
