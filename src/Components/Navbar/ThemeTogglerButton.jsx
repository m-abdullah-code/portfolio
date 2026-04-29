import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { FiSun, FiMoon } from 'react-icons/fi';

const ThemeTogglerButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-full transition-colors ${
        theme === 'dark' 
          ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' 
          : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
      }`}
      aria-label="Toggle Theme"
    >
      {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
    </button>
  );
};

export default ThemeTogglerButton;
