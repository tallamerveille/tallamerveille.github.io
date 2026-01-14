/**
 * EXPERIENCE SECTION
 * ===================
 * 
 * Research positions, projects, and collaborations.
 * Timeline-style layout with detailed descriptions.
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar, ChevronRight, GraduationCap } from 'lucide-react';
import PropTypes from 'prop-types';
import { useTheme } from './ThemeContext';
import { content } from './content';

function ExperienceCard({ exp, index, isDark }) {
	return (
		<motion.div
			initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
			whileInView={{ opacity: 1, x: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5, delay: index * 0.1 }}
			className="relative"
		>
			{/* Timeline connector */}
			<div className={`absolute left-0 top-0 bottom-0 w-px ${
				isDark ? 'bg-slate-700' : 'bg-slate-200'
			}`} style={{ left: '11px' }} />
			
			{/* Timeline dot */}
			<div className={`absolute left-0 top-6 w-6 h-6 rounded-full border-4 ${
				isDark
					? 'bg-amber-500 border-slate-900'
					: 'bg-amber-500 border-white'
			}`} style={{ left: '0' }} />
			
			{/* Content */}
			<div className="ml-12">
				<div className={`p-6 rounded-xl border transition-all duration-300 ${
					isDark
						? 'bg-slate-800/50 border-slate-700 hover:border-slate-600'
						: 'bg-white border-slate-200 hover:shadow-lg'
				}`}>
					{/* Header */}
					<div className="flex flex-wrap items-start justify-between gap-4 mb-4">
						<div>
							<h3 className={`font-semibold text-lg ${
								isDark ? 'text-white' : 'text-slate-900'
							}`}>
								{exp.title}
							</h3>
							<p className={`font-medium ${
								isDark ? 'text-amber-400' : 'text-amber-600'
							}`}>
								{exp.institution}
							</p>
						</div>
						
						<div className={`flex flex-col items-end text-sm ${
							isDark ? 'text-slate-400' : 'text-slate-500'
						}`}>
							<div className="flex items-center gap-1.5">
								<Calendar className="w-4 h-4" />
								{exp.period}
							</div>
							<div className="flex items-center gap-1.5 mt-1">
								<MapPin className="w-4 h-4" />
								{exp.location}
							</div>
						</div>
					</div>
					
					{/* Description */}
					<p className={`mb-4 ${
						isDark ? 'text-slate-300' : 'text-slate-600'
					}`}>
						{exp.description}
					</p>
					
					{/* Highlights */}
					{exp.highlights && (
						<ul className="space-y-2">
							{exp.highlights.map((highlight, i) => (
								<li
									key={i}
									className={`flex items-start gap-2 text-sm ${
										isDark ? 'text-slate-400' : 'text-slate-600'
									}`}
								>
									<ChevronRight className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
										isDark ? 'text-amber-500' : 'text-amber-500'
									}`} />
									{highlight}
								</li>
							))}
						</ul>
					)}
				</div>
			</div>
		</motion.div>
	);
}

ExperienceCard.propTypes = {
	exp: PropTypes.shape({
		title: PropTypes.string.isRequired,
		institution: PropTypes.string.isRequired,
		period: PropTypes.string.isRequired,
		location: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		highlights: PropTypes.arrayOf(PropTypes.string)
	}).isRequired,
	index: PropTypes.number.isRequired,
	isDark: PropTypes.bool.isRequired
};

function EducationCard({ edu, index, isDark }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5, delay: index * 0.1 }}
			className={`p-6 rounded-xl border ${
				isDark
					? 'bg-slate-800/50 border-slate-700'
					: 'bg-white border-slate-200'
			}`}
		>
			<div className="flex items-start gap-4">
				<div className={`p-3 rounded-xl flex-shrink-0 ${
					isDark ? 'bg-amber-500/10' : 'bg-amber-100'
				}`}>
					<GraduationCap className={`w-6 h-6 ${
						isDark ? 'text-amber-400' : 'text-amber-600'
					}`} />
				</div>
				
				<div className="flex-1">
					<div className="flex flex-wrap items-start justify-between gap-2 mb-2">
						<h3 className={`font-semibold text-lg ${
							isDark ? 'text-white' : 'text-slate-900'
						}`}>
							{edu.degree}
						</h3>
						<span className={`text-sm ${
							isDark ? 'text-slate-400' : 'text-slate-500'
						}`}>
							{edu.period}
						</span>
					</div>
					
					<p className={`font-medium mb-1 ${
						isDark ? 'text-amber-400' : 'text-amber-600'
					}`}>
						{edu.institution}
					</p>
					
					<p className={`text-sm mb-3 ${
						isDark ? 'text-slate-400' : 'text-slate-500'
					}`}>
						{edu.location}
					</p>
					
					{edu.thesis && (
						<p className={`text-sm mb-2 ${
							isDark ? 'text-slate-300' : 'text-slate-600'
						}`}>
							<span className="font-medium">Thesis:</span> {edu.thesis}
						</p>
					)}
					
					{edu.supervisors && (
						<p className={`text-sm mb-2 ${
							isDark ? 'text-slate-400' : 'text-slate-500'
						}`}>
							<span className="font-medium">Supervisors:</span> {edu.supervisors.join(', ')}
						</p>
					)}
					
					{edu.distinction && (
						<span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
							isDark
								? 'bg-emerald-500/20 text-emerald-300'
								: 'bg-emerald-100 text-emerald-700'
						}`}>
							{edu.distinction}
						</span>
					)}
				</div>
			</div>
		</motion.div>
	);
}

EducationCard.propTypes = {
	edu: PropTypes.shape({
		degree: PropTypes.string.isRequired,
		period: PropTypes.string.isRequired,
		institution: PropTypes.string.isRequired,
		location: PropTypes.string.isRequired,
		thesis: PropTypes.string,
		supervisors: PropTypes.arrayOf(PropTypes.string),
		distinction: PropTypes.string
	}).isRequired,
	index: PropTypes.number.isRequired,
	isDark: PropTypes.bool.isRequired
};

export default function ExperienceSection() {
	const { isDark } = useTheme();
	const { experience, education } = content;

	return (
		<section
			id="experience"
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
						Experience & Education
					</h2>
					<div className={`w-16 h-1 mx-auto rounded-full ${
						isDark ? 'bg-amber-400' : 'bg-amber-600'
					}`} />
				</motion.div>

				<div className="grid lg:grid-cols-2 gap-12">
					{/* Research Experience */}
					<div>
						<motion.h3
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							className={`flex items-center gap-2 text-xl font-semibold mb-8 ${
								isDark ? 'text-white' : 'text-slate-900'
							}`}
						>
							<Briefcase className={`w-5 h-5 ${
								isDark ? 'text-amber-400' : 'text-amber-600'
							}`} />
							Experience
						</motion.h3>
						
						<div className="space-y-6">
							{experience.map((exp, index) => (
								<ExperienceCard
									key={index}
									exp={exp}
									index={index}
									isDark={isDark}
								/>
							))}
						</div>
					</div>

					{/* Education */}
					<div>
						<motion.h3
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							className={`flex items-center gap-2 text-xl font-semibold mb-8 ${
								isDark ? 'text-white' : 'text-slate-900'
							}`}
						>
							<GraduationCap className={`w-5 h-5 ${
								isDark ? 'text-amber-400' : 'text-amber-600'
							}`} />
							Education
						</motion.h3>
						
						<div className="space-y-6">
							{education.map((edu, index) => (
								<EducationCard
									key={index}
									edu={edu}
									index={index}
									isDark={isDark}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}