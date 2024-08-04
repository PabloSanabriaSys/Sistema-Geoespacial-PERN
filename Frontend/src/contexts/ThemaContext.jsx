import { createContext, useContext, useEffect, useState } from 'react';
import lightTheme from 'primereact/resources/themes/lara-light-blue/theme.css?inline';
import darkTheme from 'primereact/resources/themes/lara-dark-blue/theme.css?inline';

const ThemeContext = createContext();

export const ThemaContext = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Intenta obtener el tema del localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    }
    // Si no hay tema guardado, verifica las preferencias del sistema
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    // Por defecto, usa el tema claro
    return 'light';
  });

  useEffect(() => {
    applyTheme(theme);
    // Guarda el tema en localStorage cada vez que cambie
    localStorage.setItem('theme', theme);
  }, [theme]);

  const applyTheme = (themeName) => {
    const themeContent = themeName === 'light' ? lightTheme : darkTheme;
    let style = document.getElementById('prime-theme');
    if (style) {
      style.innerHTML = themeContent;
    } else {
      style = document.createElement('style');
      style.id = 'prime-theme';
      style.innerHTML = themeContent;
      document.head.appendChild(style);
    }
    if (themeName !== 'light') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThema = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within a ThemeProvider');
  return context;
};