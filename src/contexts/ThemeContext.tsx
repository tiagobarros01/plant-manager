import React, { createContext, useState } from 'react';
import { DefaultTheme } from 'styled-components/index';

import dark from '../styles/themes/dark';
import light from '../styles/themes/light';

interface Props {
  children: React.ReactNode;
}
interface ThemeContextData {
  theme: DefaultTheme;
  setTheme: (theme: DefaultTheme) => void;
  toggleTheme: (setThemeValue: any) => void;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

function ThemeContextProvider({ children }: Props) {
  const [theme, setTheme] = useState(light);
  const { title } = theme;

  function toggleTheme(setThemeValue: any) {
    setThemeValue(title === 'light' ? dark : dark);
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
export { ThemeContext, ThemeContextProvider };
