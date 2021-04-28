/* eslint-disable camelcase */
import { Jost_400Regular, Jost_600SemiBold, useFonts } from '@expo-google-fonts/jost';
import AppLoading from 'expo-app-loading';
import * as Notifications from 'expo-notifications';
import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import { PlantProps } from './src/libs/storage';
import Routes from './src/routes/index';
import light from './src/styles/themes/light';

export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold,
  });

  useEffect(() => {
    const subscription = Notifications.addNotificationReceivedListener(
      async (notification) => {
        const data = notification.request.content.data.plant as PlantProps;
        console.log(data);
      },
    );

    return () => subscription.remove();
  }, []);

  if (!fontsLoaded) { return <AppLoading />; }

  return (
    <ThemeProvider theme={light}>
      <Routes />
    </ThemeProvider>
  );
}
