import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { ThemeProvider } from 'styled-components';

import { ThemeContext } from '../contexts/ThemeContext';

export default function ChooseTheme() {
  const { theme, setTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={theme}>
      <View>
        <Text>
          Salve
        </Text>
      </View>
    </ThemeProvider>
  );
}
