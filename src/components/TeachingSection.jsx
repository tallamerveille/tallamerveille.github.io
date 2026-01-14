
/**
 * TEACHING SECTION
 * =================
 * 
 * Teaching experience and student supervision.
 */

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, GraduationCap, CheckCircle } from 'lucide-react';
import PropTypes from 'prop-types';
import { useTheme } from './ThemeContext';
import { content } from './content';

function CourseCard({ course, index, isDark }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.4, delay: index * 0.1 }}
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
					<BookOpen className={`w-5 h-5 ${
						isDark ? 'text-amber-400' : 'text-amber-600'
					}`} />
				</div>
				
				<div className="flex-1">
					<div className="flex flex-wrap items-start justify-between gap-2 mb-2">
						<h4 className={`font-semibold ${
							isDark ? 'text-white' : 'text-slate-900'
						}`}>
							{course.title}
						</h4>
						<span className={`text-sm ${
							isDark ? 'text-slate-400' : 'text-slate-500'
						}`}>
							{course.period}
						</span>
					</div>
					
					<div className="flex flex-wrap items-center gap-3 mb-3">
						<span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
							isDark
								? 'bg-slate-700 text-slate-300'
								: 'bg-slate-100 text-slate-600'
						}`}>
							{course.role}
						</span>
						<span className={`text-sm ${
							isDark ? 'text-slate-400' : 'text-slate-500'
						}`}>
							{course.institution}
						</span>
						<span className={`text-sm ${
							isDark ? 'text-slate-500' : 'text-slate-400'
						}`}>
							{course.level}
						</span>
					</div>
					
					<p className={`text-sm mb-3 ${
						isDark ? 'text-slate-300' : 'text-slate-600'
					}`}>
						{course.description}
					</p>
					
					<div className={`flex items-center gap-2 text-sm ${
						isDark ? 'text-slate-400' : 'text-slate-500'
					}`}>
						<Users className="w-4 h-4" />
						{course.students}
					</div>
				</div>
			</div>
		</motion.div>
	);
}

CourseCard.propTypes = {
	course: PropTypes.shape({
		title: PropTypes.string.isRequired,
		period: PropTypes.string.isRequired,
		role: PropTypes.string.isRequired,
		institution: PropTypes.string.isRequired,
		level: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		students: PropTypes.string.isRequired
	}).isRequired,
	index: PropTypes.number.isRequired,
	isDark: PropTypes.bool.isRequired
};

function SupervisionCard({ student, index, isDark }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.4, delay: index * 0.1 }}
			className={`p-5 rounded-xl border ${
				isDark
					? 'bg-slate-800/50 border-slate-700'
					: 'bg-white border-slate-200'
			}`}
		>
			<div className="flex items-start gap-3">
				<div className={`p-2 rounded-lg flex-shrink-0 ${
					student.status.includes('Completed')
						? isDark ? 'bg-emerald-500/10' : 'bg-emerald-100'
						: isDark ? 'bg-blue-500/10' : 'bg-blue-100'
				}`}>
					{student.status.includes('Completed') ? (
						<CheckCircle className={`w-4 h-4 ${
							isDark ? 'text-emerald-400' : 'text-emerald-600'
						}`} />
					) : (
						<GraduationCap className={`w-4 h-4 ${
							isDark ? 'text-blue-400' : 'text-blue-600'
						}`} />
					)}
				</div>
				
				<div className="flex-1 min-w-0">
					<div className="flex flex-wrap items-center gap-2 mb-1">
						<h4 className={`font-semibold ${
							isDark ? 'text-white' : 'text-slate-900'
						}`}>
							{student.name}
						</h4>
						<span className={`px-2 py-0.5 rounded text-xs font-medium ${
							isDark
								? 'bg-slate-700 text-slate-300'
								: 'bg-slate-100 text-slate-600'
						}`}>
							{student.type}
						</span>
					</div>
					
					<p className={`text-sm mb-1 ${
						isDark ? 'text-slate-300' : 'text-slate-600'
					}`}>
						{student.title}
					</p>
					
					<div className={`flex flex-wrap items-center gap-2 text-xs ${
						isDark ? 'text-slate-400' : 'text-slate-500'
					}`}>
						<span>{student.institution}</span>
						<span>•</span>
						<span>{student.period}</span>
					</div>
					
					<p className={`text-xs mt-2 italic ${
						isDark ? 'text-slate-500' : 'text-slate-400'
					}`}>
						{student.status}
					</p>
				</div>
			</div>
		</motion.div>
	);
}

SupervisionCard.propTypes = {
	student: PropTypes.shape({
		name: PropTypes.string.isRequired,
		type: PropTypes.string.isRequired,
		title: PropTypes.string.isRequired,
		institution: PropTypes.string.isRequired,
		period: PropTypes.string.isRequired,
		status: PropTypes.string.isRequired
	}).isRequired,
	index: PropTypes.number.isRequired,
	isDark: PropTypes.bool.isRequired
};

export default function TeachingSection() {
	const { isDark } = useTheme();
	const { teaching } = content;

	return (
		<section
			id="teaching"
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
						Teaching & Supervision
					</h2>
					<div className={`w-16 h-1 mx-auto rounded-full ${
						isDark ? 'bg-amber-400' : 'bg-amber-600'
					}`} />
				</motion.div>

				<div className="grid lg:grid-cols-2 gap-12">
					{/* Courses */}
					<div>
						<motion.h3
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							className={`flex items-center gap-2 text-xl font-semibold mb-6 ${
								isDark ? 'text-white' : 'text-slate-900'
							}`}
						>
							<BookOpen className={`w-5 h-5 ${
								isDark ? 'text-amber-400' : 'text-amber-600'
							}`} />
							Teaching Experience
						</motion.h3>
						
						<div className="space-y-4">
							{teaching.courses.map((course, index) => (
								<CourseCard
									key={index}
									course={course}
									index={index}
									isDark={isDark}
								/>
							))}
						</div>
					</div>

					{/* Supervision */}
					<div>
						<motion.h3
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							className={`flex items-center gap-2 text-xl font-semibold mb-6 ${
								isDark ? 'text-white' : 'text-slate-900'
							}`}
						>
							<GraduationCap className={`w-5 h-5 ${
								isDark ? 'text-amber-400' : 'text-amber-600'
							}`} />
							Student Supervision
						</motion.h3>
						
						<div className="space-y-4">
							{teaching.supervision.map((student, index) => (
								<SupervisionCard
									key={index}
									student={student}
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