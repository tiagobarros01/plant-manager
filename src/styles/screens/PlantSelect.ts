import styled from 'styled-components/native';

export const PlantSelectContainer = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background};
`;

export const HeaderContainer = styled.View`
  padding-left: 30px;
  padding-right: 30px;
`;

export const Title = styled.Text`
  font-size: 17px;
  color: ${(props) => props.theme.colors.heading};
  font-family: ${(props) => props.theme.fonts.heading};
  line-height: 20px;
  margin-top: 15px;
`;

export const SubTitle = styled.Text`
  font-family: ${(props) => props.theme.fonts.text};
  font-size: 17px;
  line-height: 20px;
  color: ${(props) => props.theme.colors.heading};
`;

export const PlantsContainer = styled.View`
  flex: 1;
  padding-left: 32px;
  padding-right: 32px;
  justify-content: center;
`;
