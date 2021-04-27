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
  padding-left: 54px;
  padding-right: 54px;
  align-items: center;
`;

export const Header = styled.View`
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 24px;
  text-align: center;
  color: ${(props) => props.theme.colors.heading};
  font-family: ${(props) => props.theme.fonts.heading};
  line-height: 32px;
  margin-top: 20px;
`;

export const Emoji = styled.Text`
  font-size: 44px;
`;

export const Input = styled.TextInput`
  border-bottom-width: 1px;
  border-color: ${(props) => props.theme.colors.gray};
  color: ${(props) => props.theme.colors.heading};
  width: 100%;
  font-size: 18px;
  margin-top: 50px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  text-align: center;
`;

export const Footer = styled.View`
  margin-top: 40px;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
`;
