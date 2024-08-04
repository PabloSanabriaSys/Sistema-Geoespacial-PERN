import { useContext, useEffect, useState } from 'react';
import { useThema } from '../contexts/ThemaContext';

export default function ChangeStyle() {

  const {theme,toggleTheme} =useThema()


  return (
    <div>
      <header>
        <button
          className={`p-2 rounded flex ${theme === 'light' ? 'bg-gray-100 text-black' : 'bg-gray-700 text-white'}`}
          onClick={toggleTheme}
        >
          <span className={`pi pi-${theme === 'light' ? 'sun' : 'moon'}  m-auto`}></span>
        </button>
      </header>
    </div>
  );
}