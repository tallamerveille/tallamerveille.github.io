/**
 * NAVIGATION COMPONENT
 * =====================
 * 
 * Fixed navigation bar with smooth scroll functionality.
 * Includes light/dark mode toggle.
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeContext';
import { content } from './content';

export default function Navigation() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [activeSection, setActiveSection] = useState('about');
	const { isDark, toggleTheme } = useTheme();

	// Handle scroll effect for navbar background
	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
			
			// Update active section based on scroll position
			const sections = content.navigation.map(item => item.id);
			for (const section of sections.reverse()) {
				const element = document.getElementById(section);
				if (element) {
					const rect = element.getBoundingClientRect();
					if (rect.top <= 100) {
						setActiveSection(section);
						break;
					}
				}
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	// Smooth scroll to section
	const scrollToSection = (sectionId) => {
		const element = document.getElementById(sectionId);
		if (element) {
			const offset = 80; // Account for fixed navbar
			const elementPosition = element.getBoundingClientRect().top + window.scrollY;
			window.scrollTo({
				top: elementPosition - offset,
				behavior: 'smooth'
			});
		}
		setIsMobileMenuOpen(false);
	};

	return (
		<>
			{/* Fixed Navigation Bar */}
			<motion.nav
				initial={{ y: -100 }}
				animate={{ y: 0 }}
				className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
					isScrolled
						? isDark
							? 'bg-slate-900/95 backdrop-blur-md shadow-lg shadow-slate-900/20'
							: 'bg-white/95 backdrop-blur-md shadow-lg shadow-slate-200/50'
						: 'bg-transparent'
				}`}
			>
				<div className="max-w-6xl mx-auto px-6 py-4">
					<div className="flex items-center justify-between">
						{/* Logo / Name */}
						<motion.button
							onClick={() => scrollToSection('about')}
							className={`font-serif text-xl font-medium tracking-tight ${
								isDark ? 'text-white' : 'text-slate-900'
							}`}
							whileHover={{ scale: 1.02 }}
							whileTap={{ scale: 0.98 }}
						>
							Merveille Talla
						</motion.button>

						{/* Desktop Navigation */}
						<div className="hidden md:flex items-center gap-1">
							{content.navigation.map((item) => (
								<motion.button
									key={item.id}
									onClick={() => scrollToSection(item.id)}
									className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
										activeSection === item.id
											? isDark
												? 'text-amber-400 bg-slate-800'
												: 'text-amber-700 bg-amber-50'
											: isDark
												? 'text-slate-300 hover:text-white hover:bg-slate-800'
												: 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
									}`}
									whileHover={{ scale: 1.02 }}
									whileTap={{ scale: 0.98 }}
								>
									{item.label}
								</motion.button>
							))}
							
							{/* Theme Toggle */}
							<motion.button
								onClick={toggleTheme}
								className={`ml-2 p-2 rounded-full transition-colors ${
									isDark
										? 'text-slate-300 hover:text-white hover:bg-slate-800'
										: 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
								}`}
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
								aria-label="Toggle theme"
							>
								{isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
							</motion.button>
						</div>

						{/* Mobile Menu Button */}
						<div className="flex items-center gap-2 md:hidden">
							<motion.button
								onClick={toggleTheme}
								className={`p-2 rounded-full ${
									isDark ? 'text-slate-300' : 'text-slate-600'
								}`}
								whileTap={{ scale: 0.9 }}
							>
								{isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
							</motion.button>
							<motion.button
								onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
								className={`p-2 rounded-full ${
									isDark ? 'text-slate-300' : 'text-slate-600'
								}`}
								whileTap={{ scale: 0.9 }}
							>
								{isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
							</motion.button>
						</div>
					</div>
				</div>
			</motion.nav>

			{/* Mobile Menu Overlay */}
			<AnimatePresence>
				{isMobileMenuOpen && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 z-40 md:hidden"
					>
						{/* Backdrop */}
						<div 
							className="absolute inset-0 bg-black/50 backdrop-blur-sm"
							onClick={() => setIsMobileMenuOpen(false)}
						/>
						
						{/* Menu Panel */}
						<motion.div
							initial={{ x: '100%' }}
							animate={{ x: 0 }}
							exit={{ x: '100%' }}
							transition={{ type: 'spring', damping: 25, stiffness: 200 }}
							className={`absolute right-0 top-0 bottom-0 w-72 ${
								isDark ? 'bg-slate-900' : 'bg-white'
							} shadow-2xl`}
						>
							<div className="pt-20 px-6">
								{content.navigation.map((item, index) => (
									<motion.button
										key={item.id}
										initial={{ opacity: 0, x: 20 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ delay: index * 0.05 }}
										onClick={() => scrollToSection(item.id)}
										className={`w-full text-left py-3 px-4 rounded-lg mb-1 transition-colors ${
											activeSection === item.id
												? isDark
													? 'text-amber-400 bg-slate-800'
													: 'text-amber-700 bg-amber-50'
												: isDark
													? 'text-slate-300 hover:bg-slate-800'
													: 'text-slate-600 hover:bg-slate-100'
										}`}
									>
										{item.label}
									</motion.button>
								))}
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}