
import React from 'react';

const DarkModeToggle = () => {
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="bg-gray-800 text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
    >
      Toggle Dark Mode
    </button>
  );
};

export default DarkModeToggle;
