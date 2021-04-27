/* eslint-disable react/prop-types */
import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import MyPlants from '../screens/MyPlants';
import PlantSelect from '../screens/PlantSelect';
import light from '../styles/themes/light';

const AppTab = createBottomTabNavigator();

const AuthRoutes = () => (
  <AppTab.Navigator
    tabBarOptions={{
      activeTintColor: light.colors.green,
      inactiveTintColor: light.colors.heading,
      labelPosition: 'beside-icon',
      style: {
        height: 60,
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
);

export default AuthRoutes;
