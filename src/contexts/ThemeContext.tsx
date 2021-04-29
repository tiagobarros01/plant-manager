import React, { createContext, useState } from 'react';

import dark from '../styles/themes/dark';
import light from '../styles/themes/light';

interface Props {
  children: React.ReactNode;
}

interface ThemeContextData {
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

function ThemeContextProvider({ children }: Props) {
  const [theme, setTheme] = useState(light);
  const { title } = theme;

  function toggleTheme() {
    setTheme(title === 'light' ? dark : light);
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
export { ThemeContext, ThemeContextProvider };
