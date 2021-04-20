/* eslint-disable camelcase */
/* eslint-disable import/extensions */
import { Jost_400Regular, Jost_600SemiBold, useFonts } from '@expo-google-fonts/jost';
import AppLoading from 'expo-app-loading';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import Confirmation from './src/screens/Confirmation';
// import UserIdentification from './src/screens/UserIdentification';
// import { Welcome } from './src/screens/Welcome';
import light from './src/styles/themes/light';

export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold,
  });

  if (!fontsLoaded) { return <AppLoading />; }

  return (
    <ThemeProvider theme={light}>
      <Confirmation />
    </ThemeProvider>
  );
}
