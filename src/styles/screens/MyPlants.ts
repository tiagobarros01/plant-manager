import styled from 'styled-components/native';

export const MyPlantsContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding-right: 30px;
  padding-left: 30px;
  background: ${(props) => props.theme.colors.background};
`;

export const Spotlight = styled.View`
  background: ${(props) => props.theme.colors.lightBlue};
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 20px;
  height: 110px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SpotlightImage = styled.Image`
  width: 60px;
  height: 60px;
`;

export const SpotlightText = styled.Text`
  flex: 1;
  color: ${(props) => props.theme.colors.blue};
  padding-left: 20px;
  padding-right: 20px;
  text-align: justify;
`;

export const Plants = styled.View`
  flex: 1;
  width: 100%;
`;

export const PlantsTitle = styled.Text`
  font-size: 24px;
  font-family: ${(props) => props.theme.fonts.heading};
  color: ${(props) => props.theme.colors.heading};
  padding-top: 20px;
  padding-bottom: 20px;
`;
