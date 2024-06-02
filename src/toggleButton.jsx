import React from 'react';
import { useTheme } from './themeContext.jsx';

const ThemeToggle = () => {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme} className="theme-toggle-button projectsButton dark-light-button">
            {isDarkMode ? 'light' : 'dark'}
        </button>
    );
};

export default ThemeToggle;