/* eslint-disable camelcase */
import { Jost_400Regular, Jost_600SemiBold, useFonts } from '@expo-google-fonts/jost';
import AppLoading from 'expo-app-loading';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import Routes from './src/routes/index';
import light from './src/styles/themes/light';

export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold,
  });

  if (!fontsLoaded) { return <AppLoading />; }

  return (
    <ThemeProvider theme={light}>
      <Routes />
    </ThemeProvider>
  );
}
