/**
 * AWARDS SECTION
 * ===============
 * 
 * Grants, fellowships, and academic recognition.
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Medal } from 'lucide-react';
import PropTypes from 'prop-types';
import { useTheme } from './ThemeContext';
import { content } from './content';

function AwardCard({ award, index, isDark }) {
	// Alternate icons for visual variety
	const icons = [Trophy, Award, Medal];
	const Icon = icons[index % icons.length];
	
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.4, delay: index * 0.1 }}
			whileHover={{ y: -4 }}
			className={`p-6 rounded-xl border transition-all duration-300 ${
				isDark
					? 'bg-slate-800/50 border-slate-700 hover:border-amber-500/50'
					: 'bg-white border-slate-200 hover:border-amber-400 hover:shadow-lg'
			}`}
		>
			<div className="flex items-start gap-4">
				<div className={`p-3 rounded-xl flex-shrink-0 ${
					isDark ? 'bg-amber-500/10' : 'bg-amber-100'
				}`}>
					<Icon className={`w-6 h-6 ${
						isDark ? 'text-amber-400' : 'text-amber-600'
					}`} />
				</div>
				
				<div className="flex-1">
					<div className="flex flex-wrap items-start justify-between gap-2 mb-2">
						<h3 className={`font-semibold ${
							isDark ? 'text-white' : 'text-slate-900'
						}`}>
							{award.title}
						</h3>
						<span className={`text-lg font-semibold ${
							isDark ? 'text-amber-400' : 'text-amber-600'
						}`}>
							{award.year}
						</span>
					</div>
					
					<p className={`text-sm font-medium mb-2 ${
						isDark ? 'text-slate-300' : 'text-slate-600'
					}`}>
						{award.organization}
					</p>
					
					{award.amount && (
						<p className={`text-sm font-semibold mb-2 ${
							isDark ? 'text-emerald-400' : 'text-emerald-600'
						}`}>
							{award.amount}
						</p>
					)}
					
					<p className={`text-sm ${
						isDark ? 'text-slate-400' : 'text-slate-500'
					}`}>
						{award.description}
					</p>
				</div>
			</div>
		</motion.div>
	);
}

AwardCard.propTypes = {
	award: PropTypes.shape({
		title: PropTypes.string.isRequired,
		year: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
		organization: PropTypes.string.isRequired,
		amount: PropTypes.string,
		description: PropTypes.string.isRequired
	}).isRequired,
	index: PropTypes.number.isRequired,
	isDark: PropTypes.bool.isRequired
};

export default function AwardsSection() {
	const { isDark } = useTheme();
	const { awards } = content;

	return (
		<section
			id="awards"
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
						Awards & Grants
					</h2>
					<div className={`w-16 h-1 mx-auto rounded-full ${
						isDark ? 'bg-amber-400' : 'bg-amber-600'
					}`} />
				</motion.div>

				{/* Awards Grid */}
				<div className="grid md:grid-cols-2 gap-6">
					{awards.map((award, index) => (
						<AwardCard
							key={index}
							award={award}
							index={index}
							isDark={isDark}
						/>
					))}
				</div>
			</div>
		</section>
	);
}