import styled from 'styled-components/native';

export const PlantSelectContainer = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background};
`;

export const HeaderContainer = styled.View`
  padding-left: 30;
  padding-right: 30;
`;

export const Title = styled.Text`
  font-size: 17;
  color: ${(props) => props.theme.colors.heading};
  font-family: ${(props) => props.theme.fonts.heading};
  line-height: 20;
  margin-top: 15;
`;

export const SubTitle = styled.Text`
  font-family: ${(props) => props.theme.fonts.text};
  font-size: 17;
  line-height: 20;
  color: ${(props) => props.theme.colors.heading};
`;

export const PlantsContainer = styled.View`
  flex: 1;
  padding-left: 32;
  padding-right: 32;
  justify-content: center;
`;
