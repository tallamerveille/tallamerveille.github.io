/**
 * RESEARCH SECTION
 * =================
 * 
 * Research statement and core research themes.
 * Displays the researcher's main areas of focus.
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Atom, Waves, Zap, BarChart3 } from 'lucide-react';
import { useTheme } from './ThemeContext';
import { content } from './content';

// Icon mapping for research themes
const themeIcons = {
	0: Lightbulb,	// Diffusion Models
	1: Atom,			 // Neural Operators
	2: Waves,			// Turbulence
	3: Zap,				// Physics-Informed
	4: BarChart3,	// Variational
};

export default function ResearchSection() {
	const { isDark } = useTheme();
	const { researchProfile } = content;

	return (
		<section
			id="research"
			className={`py-24 ${isDark ? 'bg-slate-800' : 'bg-white'}`}
		>
			<div className="max-w-5xl mx-auto px-6">
				{/* Section Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center mb-16"
				>
					<h2 className={`font-serif text-3xl md:text-4xl font-medium mb-4 ${
						isDark ? 'text-white' : 'text-slate-900'
					}`}>
						Research Profile
					</h2>
					<div className={`w-16 h-1 mx-auto rounded-full ${
						isDark ? 'bg-amber-400' : 'bg-amber-600'
					}`} />
				</motion.div>

				{/* Research Statement */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.1 }}
					className="mb-16"
				>
					<div className={`p-8 rounded-2xl ${
						isDark ? 'bg-slate-900/50' : 'bg-slate-50'
					}`}>
						{researchProfile.statement.split('\n\n').map((paragraph, index) => (
							<p
								key={index}
								className={`text-lg leading-relaxed mb-4 last:mb-0 ${
									isDark ? 'text-slate-300' : 'text-slate-600'
								}`}
							>
								{paragraph}
							</p>
						))}
					</div>
				</motion.div>

				{/* Research Themes */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.2 }}
				>
					<h3 className={`text-xl font-semibold mb-8 text-center ${
						isDark ? 'text-white' : 'text-slate-900'
					}`}>
						Core Research Themes
					</h3>
					
					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
						{researchProfile.themes.map((theme, index) => {
							const Icon = themeIcons[index] || Lightbulb;
							
							return (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.4, delay: 0.1 * index }}
									whileHover={{ y: -4 }}
									className={`p-6 rounded-xl border transition-all duration-300 ${
										isDark
											? 'bg-slate-900/30 border-slate-700 hover:border-amber-500/50'
											: 'bg-white border-slate-200 hover:border-amber-400 hover:shadow-lg'
									}`}
								>
									<div className={`inline-flex p-3 rounded-xl mb-4 ${
										isDark ? 'bg-amber-500/10' : 'bg-amber-100'
									}`}>
										<Icon className={`w-6 h-6 ${
											isDark ? 'text-amber-400' : 'text-amber-600'
										}`} />
									</div>
									
									<h4 className={`font-semibold text-lg mb-2 ${
										isDark ? 'text-white' : 'text-slate-900'
									}`}>
										{theme.title}
									</h4>
									
									<p className={`text-sm leading-relaxed ${
										isDark ? 'text-slate-400' : 'text-slate-600'
									}`}>
										{theme.description}
									</p>
								</motion.div>
							);
						})}
					</div>
				</motion.div>
			</div>
		</section>
	);
}