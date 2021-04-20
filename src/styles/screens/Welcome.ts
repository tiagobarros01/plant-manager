import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 32;
  font-weight: bold;
  text-align: center;
  color: ${(props) => props.theme.colors.heading};
  margin-top: 30;
`;

export const Image = styled.Image`
    width: 292;
    height: 284;
  `;

export const SubTitle = styled.Text`
  text-align: center;
  font-size: 18;
  padding-left: 20;
  padding-right: 20;
  color: ${(props) => props.theme.colors.heading};
`;

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