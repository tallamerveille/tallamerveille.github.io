
/**
 * SKILLS SECTION
 * ===============
 * 
 * Technical skills in mathematics, AI/ML, and programming.
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Calculator, Brain, Code2, Wrench } from 'lucide-react';
import PropTypes from 'prop-types';
import { useTheme } from './ThemeContext';
import { content } from './content';

function SkillCategory({ title, icon: Icon, skills, isDark }) {
	return (
		<div className={`p-6 rounded-xl border ${
			isDark
				? 'bg-slate-800/50 border-slate-700'
				: 'bg-white border-slate-200'
		}`}>
			<div className="flex items-center gap-3 mb-5">
				<div className={`p-2.5 rounded-xl ${
					isDark ? 'bg-amber-500/10' : 'bg-amber-100'
				}`}>
					<Icon className={`w-5 h-5 ${
						isDark ? 'text-amber-400' : 'text-amber-600'
					}`} />
				</div>
				<h3 className={`font-semibold text-lg ${
					isDark ? 'text-white' : 'text-slate-900'
				}`}>
					{title}
				</h3>
			</div>
			
			<div className="space-y-4">
				{skills.map((skill, index) => (
					<div key={index}>
						<div className="flex items-center justify-between mb-1.5">
							<span className={`font-medium ${
								isDark ? 'text-slate-200' : 'text-slate-700'
							}`}>
								{skill.name}
							</span>
							<span className={`text-xs px-2 py-0.5 rounded-full ${
								skill.level === 'Expert'
									? isDark
										? 'bg-amber-500/20 text-amber-300'
										: 'bg-amber-100 text-amber-700'
									: skill.level === 'Advanced'
										? isDark
											? 'bg-blue-500/20 text-blue-300'
											: 'bg-blue-100 text-blue-700'
										: isDark
											? 'bg-slate-700 text-slate-300'
											: 'bg-slate-100 text-slate-600'
							}`}>
								{skill.level}
							</span>
						</div>
						{skill.details && (
							<p className={`text-sm ${
								isDark ? 'text-slate-400' : 'text-slate-500'
							}`}>
								{skill.details}
							</p>
						)}
					</div>
				))}
			</div>
		</div>
	);
}

SkillCategory.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.elementType.isRequired,
	skills: PropTypes.arrayOf(PropTypes.shape({
		name: PropTypes.string.isRequired,
		level: PropTypes.string.isRequired,
		details: PropTypes.string
	})).isRequired,
	isDark: PropTypes.bool.isRequired
};

function ProgrammingSkills({ skills, isDark }) {
	const levelColors = {
		Expert: isDark ? 'border-amber-500 bg-amber-500/10' : 'border-amber-500 bg-amber-50',
		Advanced: isDark ? 'border-blue-500 bg-blue-500/10' : 'border-blue-500 bg-blue-50',
		Intermediate: isDark ? 'border-slate-500 bg-slate-500/10' : 'border-slate-400 bg-slate-50',
	};
	
	return (
		<div className={`p-6 rounded-xl border ${
			isDark
				? 'bg-slate-800/50 border-slate-700'
				: 'bg-white border-slate-200'
		}`}>
			<div className="flex items-center gap-3 mb-5">
				<div className={`p-2.5 rounded-xl ${
					isDark ? 'bg-amber-500/10' : 'bg-amber-100'
				}`}>
					<Code2 className={`w-5 h-5 ${
						isDark ? 'text-amber-400' : 'text-amber-600'
					}`} />
				</div>
				<h3 className={`font-semibold text-lg ${
					isDark ? 'text-white' : 'text-slate-900'
				}`}>
					Programming & Tools
				</h3>
			</div>
			
			<div className="flex flex-wrap gap-3">
				{skills.map((skill, index) => (
					<div
						key={index}
						className={`px-4 py-2 rounded-lg border-2 ${levelColors[skill.level]}`}
					>
						<span className={`font-medium ${
							isDark ? 'text-slate-200' : 'text-slate-700'
						}`}>
							{skill.name}
						</span>
					</div>
				))}
			</div>
			
			<div className="flex items-center gap-6 mt-5 pt-5 border-t border-slate-200 dark:border-slate-700">
				<div className="flex items-center gap-2">
					<div className="w-3 h-3 rounded border-2 border-amber-500 bg-amber-500/20" />
					<span className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Expert</span>
				</div>
				<div className="flex items-center gap-2">
					<div className="w-3 h-3 rounded border-2 border-blue-500 bg-blue-500/20" />
					<span className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Advanced</span>
				</div>
				<div className="flex items-center gap-2">
					<div className="w-3 h-3 rounded border-2 border-slate-400 bg-slate-500/20" />
					<span className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Intermediate</span>
				</div>
			</div>
		</div>
	);
}

ProgrammingSkills.propTypes = {
	skills: PropTypes.arrayOf(PropTypes.shape({
		name: PropTypes.string.isRequired,
		level: PropTypes.string.isRequired
	})).isRequired,
	isDark: PropTypes.bool.isRequired
};

function ToolsList({ tools, isDark }) {
	return (
		<div className={`p-6 rounded-xl border ${
			isDark
				? 'bg-slate-800/50 border-slate-700'
				: 'bg-white border-slate-200'
		}`}>
			<div className="flex items-center gap-3 mb-5">
				<div className={`p-2.5 rounded-xl ${
					isDark ? 'bg-amber-500/10' : 'bg-amber-100'
				}`}>
					<Wrench className={`w-5 h-5 ${
						isDark ? 'text-amber-400' : 'text-amber-600'
					}`} />
				</div>
				<h3 className={`font-semibold text-lg ${
					isDark ? 'text-white' : 'text-slate-900'
				}`}>
					Scientific Computing Tools
				</h3>
			</div>
			
			<div className="flex flex-wrap gap-2">
				{tools.map((tool, index) => (
					<span
						key={index}
						className={`px-3 py-1.5 rounded-full text-sm ${
							isDark
								? 'bg-slate-700 text-slate-300'
								: 'bg-slate-100 text-slate-600'
						}`}
					>
						{tool}
					</span>
				))}
			</div>
		</div>
	);
}

ToolsList.propTypes = {
	tools: PropTypes.arrayOf(PropTypes.string).isRequired,
	isDark: PropTypes.bool.isRequired
};

export default function SkillsSection() {
	const { isDark } = useTheme();
	const { skills } = content;

	return (
		<section
			id="skills"
			className={`py-24 ${isDark ? 'bg-slate-900' : 'bg-slate-50'}`}
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
						Skills & Expertise
					</h2>
					<div className={`w-16 h-1 mx-auto rounded-full ${
						isDark ? 'bg-amber-400' : 'bg-amber-600'
					}`} />
				</motion.div>

				<div className="grid md:grid-cols-2 gap-6">
					{/* Mathematics */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
					>
						<SkillCategory
							title="Mathematics"
							icon={Calculator}
							skills={skills.mathematics}
							isDark={isDark}
						/>
					</motion.div>

					{/* AI/ML */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.1 }}
					>
						<SkillCategory
							title="AI & Machine Learning"
							icon={Brain}
							skills={skills.ai_ml}
							isDark={isDark}
						/>
					</motion.div>

					{/* Programming */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.2 }}
					>
						<ProgrammingSkills
							skills={skills.programming}
							isDark={isDark}
						/>
					</motion.div>

					{/* Tools */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.3 }}
					>
						<ToolsList
							tools={skills.tools}
							isDark={isDark}
						/>
					</motion.div>
				</div>
			</div>
		</section>
	);
}