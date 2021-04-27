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
  padding-top: 30px;
  padding-bottom: 30px;
  padding-right: 30px;
  padding-left: 30px;
`;

export const Emoji = Styled.Text`
  font-size: 78px;
`;

export const Title = Styled.Text`
  font-size: 22px;
  font-family: ${(props) => props.theme.fonts.heading};
  text-align: center;
  color: ${(props) => props.theme.colors.heading};
  line-height: 38px;
`;

export const SubTitle = Styled.Text`
  font-family: ${(props) => props.theme.fonts.text};
  text-align: center;
  font-size: 17px;
  padding-left: 10px;
  padding-right: 10px;
  color: ${(props) => props.theme.colors.heading};
`;

export const Footer = Styled.View`
  width: 100%;
  padding-left: 50px;
  padding-right: 50px;
  margin-top: 20px;
`;
