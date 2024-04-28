// AuthContext.js

import { createContext, useContext, useEffect, useState } from 'react';
const ThemeContext = createContext();

export const ThemaContext = ({ children }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const body = document.body;
    const hasDarkClass = body.classList.contains('dark');
    if (hasDarkClass) {
      setTheme('dark');
    }
  }, []);
  
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    if (theme != 'dark') {
      document.querySelector('body').classList.add('dark');
    } else {
      document.querySelector('body').classList.remove('dark');
    }
    setTheme(newTheme);

  };

  useEffect(() => {
    const newTheme = theme === 'light' ? '/themes/lara-light-blue/theme' : '/themes/lara-dark-blue/theme';
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = `${newTheme}.css`;
    link.id = "theme-link";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, [theme]);

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThema = () => {
  const context = useContext(ThemeContext);

  if (!context) throw new Error('theme error')

  return context;
};