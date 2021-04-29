import { createStackNavigator } from '@react-navigation/stack';
import React, { useContext, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components/native';

import { ThemeContext } from '../contexts/ThemeContext';
import Confirmation from '../screens/Confirmation';
import PlantSave from '../screens/PlantSave';
import UserIdentification from '../screens/UserIdentification';
import Welcome from '../screens/Welcome';
import dark from '../styles/themes/dark';
import light from '../styles/themes/light';
import AuthRoutes from './tab.routes';

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  const verifyTheme = theme.title === 'light';

  return (
    <ThemeProvider theme={theme}>
      <stackRoutes.Navigator
        headerMode="none"
        screenOptions={{
          cardStyle: {
            backgroundColor:
            verifyTheme ? light.colors.background : dark.colors.background,
          },
        }}
      >
        <stackRoutes.Screen name="Welcome" component={Welcome} />
        <stackRoutes.Screen
          name="UserIdentification"
          component={UserIdentification}
        />
        <stackRoutes.Screen name="Confirmation" component={Confirmation} />
        <stackRoutes.Screen name="PlantSelect" component={AuthRoutes} />
        <stackRoutes.Screen name="PlantSave" component={PlantSave} />
        <stackRoutes.Screen name="MyPlants" component={AuthRoutes} />
      </stackRoutes.Navigator>
    </ThemeProvider>
  );
};

export default AppRoutes;
