/**
 * HERO SECTION
 * =============
 * 
 * Introduction section with name, title, and research focus.
 * Features animated background elements and profile image.
 */

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Mail, FileText, Github, Download } from 'lucide-react';
import { useTheme } from './ThemeContext';
import { content } from './content';

export default function HeroSection() {
	const { isDark } = useTheme();
	const { personalInfo, contact } = content;

	const scrollToResearch = () => {
		const element = document.getElementById('research');
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<section
			id="about"
			className={`relative min-h-screen flex items-center justify-center overflow-hidden ${
				isDark ? 'bg-slate-900' : 'bg-gradient-to-br from-slate-50 via-white to-amber-50/30'
			}`}
		>
			{/* Animated Background Elements */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				{/* Geometric patterns suggesting mathematical structures */}
				<motion.div
					animate={{ rotate: 360 }}
					transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
					className={`absolute -top-1/4 -right-1/4 w-[800px] h-[800px] rounded-full border ${
						isDark ? 'border-slate-800' : 'border-slate-200/50'
					}`}
				/>
				<motion.div
					animate={{ rotate: -360 }}
					transition={{ duration: 180, repeat: Infinity, ease: 'linear' }}
					className={`absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full border ${
						isDark ? 'border-slate-800' : 'border-slate-200/50'
					}`}
				/>
				
				{/* Subtle gradient orbs */}
				<div className={`absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl ${
					isDark ? 'bg-amber-500/5' : 'bg-amber-400/10'
				}`} />
				<div className={`absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl ${
					isDark ? 'bg-blue-500/5' : 'bg-blue-400/10'
				}`} />
			</div>

			{/* Main Content */}
			<div className="relative z-10 max-w-5xl mx-auto px-6 py-24 text-center">
				{/* Profile Image */}
				<motion.div
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.6 }}
					className="mb-8"
				>
					<div className={`inline-block p-1 rounded-full ${
						isDark 
							? 'bg-gradient-to-br from-amber-400 to-amber-600' 
							: 'bg-gradient-to-br from-amber-500 to-amber-700'
					}`}>
						<div className={`p-1 rounded-full ${isDark ? 'bg-slate-900' : 'bg-white'}`}>
							<img
								src={personalInfo.profileImage}
								alt={personalInfo.name}
								className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover"
							/>
						</div>
					</div>
				</motion.div>

				{/* Name */}
				<motion.h1
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.1 }}
					className={`font-serif text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-4 ${
						isDark ? 'text-white' : 'text-slate-900'
					}`}
				>
					{personalInfo.name}
				</motion.h1>

				{/* Title */}
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className={`text-lg md:text-xl font-medium mb-6 ${
						isDark ? 'text-amber-400' : 'text-amber-700'
					}`}
				>
					{personalInfo.title}
				</motion.p>

				{/* Tagline */}
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.3 }}
					className={`max-w-2xl mx-auto text-lg md:text-xl leading-relaxed mb-8 ${
						isDark ? 'text-slate-300' : 'text-slate-600'
					}`}
				>
					{personalInfo.tagline}
				</motion.p>

				{/* Current Position */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.4 }}
					className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm mb-10 ${
						isDark 
							? 'bg-slate-800 text-slate-300' 
							: 'bg-slate-100 text-slate-600'
					}`}
				>
					<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
					{personalInfo.currentPosition} at {personalInfo.institution}
				</motion.div>

				{/* Action Buttons */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.5 }}
					className="flex flex-wrap justify-center gap-4 mb-16"
				>
					<a
						href={`mailto:${contact.email}`}
						className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-200 ${
							isDark
								? 'bg-amber-500 text-slate-900 hover:bg-amber-400'
								: 'bg-slate-900 text-white hover:bg-slate-800'
						}`}
					>
						<Mail className="w-4 h-4" />
						Contact Me
					</a>
					<a
						href={contact.cvUrl || '/cv.pdf'}
						download
						className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-200 ${
							isDark
								? 'bg-emerald-600 text-white hover:bg-emerald-500'
								: 'bg-emerald-600 text-white hover:bg-emerald-700'
						}`}
					>
						<Download className="w-4 h-4" />
						Download CV
					</a>
					<a
						href={contact.googleScholar}
						target="_blank"
						rel="noopener noreferrer"
						className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-200 ${
							isDark
								? 'bg-slate-800 text-white hover:bg-slate-700 border border-slate-700'
								: 'bg-white text-slate-900 hover:bg-slate-50 border border-slate-200'
						}`}
					>
						<FileText className="w-4 h-4" />
						Google Scholar
					</a>
					<a
						href={contact.github}
						target="_blank"
						rel="noopener noreferrer"
						className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-200 ${
							isDark
								? 'bg-slate-800 text-white hover:bg-slate-700 border border-slate-700'
								: 'bg-white text-slate-900 hover:bg-slate-50 border border-slate-200'
						}`}
					>
						<Github className="w-4 h-4" />
						GitHub
					</a>
				</motion.div>

				{/* Scroll Indicator */}
				<motion.button
					onClick={scrollToResearch}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1 }}
					className={`absolute bottom-8 left-1/2 -translate-x-1/2 ${
						isDark ? 'text-slate-400' : 'text-slate-500'
					}`}
				>
					<motion.div
						animate={{ y: [0, 8, 0] }}
						transition={{ duration: 2, repeat: Infinity }}
					>
						<ArrowDown className="w-6 h-6" />
					</motion.div>
				</motion.button>
			</div>
		</section>
	);
}