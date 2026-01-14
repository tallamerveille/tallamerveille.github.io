/**
 * FOOTER COMPONENT
 * =================
 * 
 * Simple footer with copyright and quick links.
 */

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useTheme } from './ThemeContext';
import { content } from './content';

export default function Footer() {
	const { isDark } = useTheme();
	const { personalInfo } = content;
	const currentYear = new Date().getFullYear();

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<footer className={`py-8 ${
			isDark ? 'bg-slate-950 border-t border-slate-800' : 'bg-white border-t border-slate-200'
		}`}>
			<div className="max-w-5xl mx-auto px-6">
				<div className="flex flex-col md:flex-row items-center justify-between gap-4">
					{/* Copyright */}
					<p className={`text-sm ${
						isDark ? 'text-slate-400' : 'text-slate-500'
					}`}>
						{currentYear} {personalInfo.name}. All rights reserved.
					</p>
					
					{/* Back to top */}
					<motion.button
						onClick={scrollToTop}
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className={`flex items-center gap-2 text-sm font-medium transition-colors ${
							isDark
								? 'text-slate-400 hover:text-amber-400'
								: 'text-slate-500 hover:text-amber-600'
						}`}
					>
						Back to top
						<ArrowUp className="w-4 h-4" />
					</motion.button>
				</div>
			</div>
		</footer>
	);
}