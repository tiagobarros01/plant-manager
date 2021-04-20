import Styled from 'styled-components/native';

export const CfmContainer = Styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: space-around;
`;

export const Wrapper = Styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 30;
  padding-bottom: 30;
  padding-right: 30;
  padding-left: 30;
`;

export const Emoji = Styled.Text`
  font-size: 78;
`;

export const Title = Styled.Text`
  font-size: 22;
  font-family: ${(props) => props.theme.fonts.heading};
  text-align: center;
  color: ${(props) => props.theme.colors.heading};
  line-height: 38;
`;

export const SubTitle = Styled.Text`
  font-family: ${(props) => props.theme.fonts.text};
  text-align: center;
  font-size: 17;
  padding-left: 10;
  padding-right: 10;
  color: ${(props) => props.theme.colors.heading};
`;

export const Footer = Styled.View`
  width: 100%;
  padding-left: 50;
  padding-right: 50;
  margin-top: 20;
`;
