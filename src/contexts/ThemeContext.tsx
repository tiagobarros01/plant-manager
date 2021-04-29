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
  setToLight: (setThemeValue: any) => void;
  setToDark: (setThemeValue: any) => void;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

function ThemeContextProvider({ children }: Props) {
  const [theme, setTheme] = useState(light);

  function setToLight(setThemeValue: any) {
    setThemeValue(light);
  }

  function setToDark(setThemeValue: any) {
    setThemeValue(dark);
  }

  return (
    <ThemeContext.Provider value={{
      theme, setTheme, setToLight, setToDark,
    }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
export { ThemeContext, ThemeContextProvider };
