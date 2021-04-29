import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-left: 25px;
  padding-right: 25px;
`;

export const ThemeEmoji = styled.Text`
font-size: 78px;
`;

export const ThemeTitle = styled.Text`
  color: ${(props) => props.theme.colors.heading};
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: 25px;
  text-align: center;
`;

export const BtnContainer = styled.View`
  flex-direction: row;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const ThemeButtonLight = styled.TouchableOpacity`
  background: ${(props) => props.theme.colors.white};
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  height: 56px;
  margin-right: 10px;
  width: 120px;
`;

export const ThemeButtonDark = styled.TouchableOpacity`
  background: ${(props) => props.theme.colors.black};
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  height: 56px;
  width: 120px;
`;

export const BtnText = styled.Text`
  font-size: 16px;
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.heading};
`;

export const TouchableBtn = styled.TouchableOpacity`
  background: ${(props) => props.theme.colors.green};
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  margin-bottom: 10px;
  height: 56px;
  width: 170px;
`;
