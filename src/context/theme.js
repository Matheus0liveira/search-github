import React, {
  useState, createContext, useContext,
} from 'react';

import light from '../assets/styles/light';
// import dark from '../assets/styles/dark';

const ThemeContext = createContext();

export default function ThemeSelectedProvider({ children }) {
  const [theme, setTheme] = useState(light);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>

      {children}

    </ThemeContext.Provider>

  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within a ThemeProvider');

  const { theme, setTheme } = context;

  return { theme, setTheme };
};
