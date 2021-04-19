/* eslint-disable import/extensions */
import React from 'react';
import { ThemeProvider } from 'styled-components';

import { Welcome } from './src/screens/Welcome';
import light from './src/styles/themes/light';

export default function App() {
  return (
    <ThemeProvider theme={light}>
      <Welcome />
    </ThemeProvider>
  );
}
