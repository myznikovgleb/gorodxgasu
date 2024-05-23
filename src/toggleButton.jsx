import React from 'react';
import { useTheme } from './themeContext.jsx';

const ThemeToggle = () => {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme} className="theme-toggle-button">
            {isDarkMode ? '🌞' : '🌚'}
        </button>
    );
};

export default ThemeToggle;