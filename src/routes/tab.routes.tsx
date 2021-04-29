/* eslint-disable react/prop-types */
import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';

import { ThemeContext } from '../contexts/ThemeContext';
import MyPlants from '../screens/MyPlants';
import PlantSelect from '../screens/PlantSelect';
import dark from '../styles/themes/dark';
import light from '../styles/themes/light';

const AppTab = createBottomTabNavigator();

const AuthRoutes = () => {
  const { theme } = useContext(ThemeContext);
  const verifyTheme = theme.title === 'light';

  return (
    <ThemeProvider theme={theme}>
      <AppTab.Navigator
        tabBarOptions={{
          activeTintColor: verifyTheme ? light.colors.green : dark.colors.green,
          inactiveTintColor: verifyTheme ? light.colors.heading : dark.colors.heading,
          inactiveBackgroundColor: verifyTheme ? light.colors.background : dark.colors.background,
          activeBackgroundColor: verifyTheme ? light.colors.background : dark.colors.background,
          labelPosition: 'beside-icon',
          style: {
            height: 60,
            borderTopWidth: 0,
          },
        }}
      >
        <AppTab.Screen
          name="New Plant"
          component={PlantSelect}
          options={{
            tabBarIcon: (({ size, color }) => (
              <MaterialIcons
                name="add-circle-outline"
                size={size}
                color={color}
              />
            )),
          }}
        />
        <AppTab.Screen
          name="My Plants"
          component={MyPlants}
          options={{
            tabBarIcon: (({ size, color }) => (
              <MaterialIcons
                name="format-list-bulleted"
                size={size}
                color={color}
              />
            )),
          }}
        />
      </AppTab.Navigator>
    </ThemeProvider>
  );
};

export default AuthRoutes;
