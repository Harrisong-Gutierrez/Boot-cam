/* eslint-disable react/jsx-no-constructed-context-values */

'use client';

import React, { createContext, useState, useCallback, useEffect } from 'react';

const ThemeContext = createContext({});

const ThemeContextProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = JSON.parse(localStorage.getItem('isDarkMode')) || false;

    setIsDarkMode(savedTheme);
  }, []);

  useEffect(() => {
    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkMode = useCallback(() => {
    setIsDarkMode((prevIsDarkMode) => !prevIsDarkMode);
  }, [isDarkMode]);

  const Theme = isDarkMode ? 'dark' : 'light';

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode, Theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeContextProvider };
