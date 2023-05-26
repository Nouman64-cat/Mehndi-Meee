import React, { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <button onClick={handleToggle}>
      {isDarkMode ? <FaSun style={{ color: 'orange', fontSize:'1.5rem' }}/> : <FaMoon style={{fontSize:'1.5rem' }}/>}
    </button>
  );
};

export default DarkModeToggle;
