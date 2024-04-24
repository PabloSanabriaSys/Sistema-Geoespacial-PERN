import { useContext, useEffect, useState } from 'react';

export default function ChangeStyle() {

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
    <div>
      <header>
        <button
          className={`p-2 rounded flex ${theme === 'light' ? 'bg-gray-100 text-black' : 'bg-gray-700 text-white'}`}
          onClick={() => toggleTheme()}
        >
          <span className={`pi pi-${theme === 'light' ? 'sun' : 'moon'}  m-auto`}></span>
        </button>
      </header>
    </div>
  );
}