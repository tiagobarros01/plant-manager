import React from 'react';

import { ThemeContextProvider } from './ThemeContext';

interface Props {
  children: React.ReactNode;
}

export default function ContextProvider({ children }: Props) {
  return (
    <ThemeContextProvider>
      {children}
    </ThemeContextProvider>
  );
}
