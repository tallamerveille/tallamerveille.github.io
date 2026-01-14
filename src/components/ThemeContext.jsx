/**
 * THEME CONTEXT
 * ==============
 * 
 * Provides light/dark mode functionality across the portfolio.
 * 
 * To customize colors:
 * - Modify the theme object in this file
 * - Colors use Tailwind CSS classes
 * - Update both light and dark variants for consistency
 */

import React, { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Theme configuration - modify these values to change the color scheme

export const themeConfig = {
	light: {
		// Primary colors
		primary: 'text-navy-900',					// Main headings
		primaryBg: 'bg-navy-900',					// Primary backgrounds
		accent: 'text-amber-600',					// Accent color (gold)
		accentBg: 'bg-amber-600',					// Accent backgrounds
		
		// Text colors
		textPrimary: 'text-slate-900',		 // Main text
		textSecondary: 'text-slate-600',	 // Secondary text
		textMuted: 'text-slate-500',			 // Muted text
		
		// Backgrounds
		bgPrimary: 'bg-white',						 // Main background
		bgSecondary: 'bg-slate-50',				// Section backgrounds
		bgTertiary: 'bg-slate-100',				// Card backgrounds
		
		// Borders
		border: 'border-slate-200',
		borderHover: 'border-slate-300',
		
		// Interactive states
		hover: 'hover:bg-slate-100',
		active: 'bg-slate-200',
	},
	dark: {
		// Primary colors
		primary: 'text-white',
		primaryBg: 'bg-slate-800',
		accent: 'text-amber-400',
		accentBg: 'bg-amber-500',
		
		// Text colors
		textPrimary: 'text-slate-100',
		textSecondary: 'text-slate-300',
		textMuted: 'text-slate-400',
		
		// Backgrounds
		bgPrimary: 'bg-slate-900',
		bgSecondary: 'bg-slate-800',
		bgTertiary: 'bg-slate-700',
		
		// Borders
		border: 'border-slate-700',
		borderHover: 'border-slate-600',
		
		// Interactive states
		hover: 'hover:bg-slate-700',
		active: 'bg-slate-600',
	}
};

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
	const [isDark, setIsDark] = useState(() => {
		// Check for saved preference first
		const savedTheme = localStorage.getItem('portfolio-theme');
		if (savedTheme) {
			return savedTheme === 'dark';
		}
		// Fall back to system preference
		return window.matchMedia('(prefers-color-scheme: dark)').matches;
	});

	// Save preference when changed
	useEffect(() => {
		localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light');
		// Update document class for global dark mode
		if (isDark) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [isDark]);

	const toggleTheme = () => setIsDark(!isDark);
	const theme = isDark ? themeConfig.dark : themeConfig.light;

	return (
		<ThemeContext.Provider value={{ isDark, toggleTheme, theme }}>
			{children}
		</ThemeContext.Provider>
	);
}

ThemeProvider.propTypes = {
	children: PropTypes.node.isRequired
};

export function useTheme() {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error('useTheme must be used within a ThemeProvider');
	}
	return context;
}

export default ThemeContext;