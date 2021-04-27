import styled from 'styled-components/native';

export const MyPlantsContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-right: 30px;
  padding-left: 30px;
  padding-top: 50px;
  background: ${(props) => props.theme.colors.background};
`;
