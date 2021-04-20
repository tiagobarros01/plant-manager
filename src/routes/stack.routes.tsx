import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import Confirmation from '../screens/Confirmation';
import UserIdentification from '../screens/UserIdentification';
import Welcome from '../screens/Welcome';
import light from '../styles/themes/light';

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
  <stackRoutes.Navigator
    headerMode="none"
    screenOptions={{
      cardStyle: {
        backgroundColor: light.colors.white,
      },
    }}
  >
    <stackRoutes.Screen name="Welcome" component={Welcome} />
    <stackRoutes.Screen name="UserIdentification" component={UserIdentification} />
    <stackRoutes.Screen name="Confirmation" component={Confirmation} />
  </stackRoutes.Navigator>
);

export default AppRoutes;
