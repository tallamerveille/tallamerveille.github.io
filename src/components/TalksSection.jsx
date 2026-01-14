
/**
 * TALKS SECTION
 * ==============
 * 
 * Invited talks, conference presentations, and workshops.
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Mic, Users, MapPin, Calendar } from 'lucide-react';
import PropTypes from 'prop-types';
import { useTheme } from './ThemeContext';
import { content } from './content';

function TalkCard({ talk, type, index, isDark }) {
	const isInvited = type === 'invited';
	
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.4, delay: index * 0.1 }}
			className={`p-5 rounded-xl border transition-all duration-300 ${
				isDark
					? 'bg-slate-800/50 border-slate-700 hover:border-slate-600'
					: 'bg-white border-slate-200 hover:shadow-md'
			}`}
		>
			<div className="flex items-start gap-4">
				<div className={`p-2.5 rounded-lg flex-shrink-0 ${
					isInvited
						? isDark ? 'bg-amber-500/10' : 'bg-amber-100'
						: isDark ? 'bg-slate-700' : 'bg-slate-100'
				}`}>
					{isInvited ? (
						<Mic className={`w-5 h-5 ${
							isDark ? 'text-amber-400' : 'text-amber-600'
						}`} />
					) : (
						<Users className={`w-5 h-5 ${
							isDark ? 'text-slate-400' : 'text-slate-500'
						}`} />
					)}
				</div>
				
				<div className="flex-1 min-w-0">
					<h4 className={`font-semibold leading-tight mb-2 ${
						isDark ? 'text-white' : 'text-slate-900'
					}`}>
						{talk.title}
					</h4>
					
					<p className={`text-sm font-medium mb-2 ${
						isDark ? 'text-amber-400' : 'text-amber-600'
					}`}>
						{talk.venue}
					</p>
					
					<div className={`flex flex-wrap items-center gap-4 text-sm ${
						isDark ? 'text-slate-400' : 'text-slate-500'
					}`}>
						<span className="flex items-center gap-1.5">
							<MapPin className="w-3.5 h-3.5" />
							{talk.location}
						</span>
						<span className="flex items-center gap-1.5">
							<Calendar className="w-3.5 h-3.5" />
							{talk.date}
						</span>
					</div>
					
					{talk.type && (
						<span className={`inline-block mt-3 px-2.5 py-1 rounded-full text-xs font-medium ${
							isDark
								? 'bg-slate-700 text-slate-300'
								: 'bg-slate-100 text-slate-600'
						}`}>
							{talk.type}
						</span>
					)}
				</div>
			</div>
		</motion.div>
	);
}

TalkCard.propTypes = {
	talk: PropTypes.shape({
		title: PropTypes.string.isRequired,
		venue: PropTypes.string.isRequired,
		location: PropTypes.string.isRequired,
		date: PropTypes.string.isRequired,
		type: PropTypes.string
	}).isRequired,
	type: PropTypes.string.isRequired,
	index: PropTypes.number.isRequired,
	isDark: PropTypes.bool.isRequired
};

export default function TalksSection() {
	const { isDark } = useTheme();
	const { talks } = content;

	return (
		<section
			id="talks"
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
						Talks & Presentations
					</h2>
					<div className={`w-16 h-1 mx-auto rounded-full ${
						isDark ? 'bg-amber-400' : 'bg-amber-600'
					}`} />
				</motion.div>

				<div className="grid lg:grid-cols-2 gap-12">
					{/* Invited Talks */}
					<div>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							className="flex items-center gap-3 mb-6"
						>
							<div className={`p-2 rounded-lg ${
								isDark ? 'bg-amber-500/10' : 'bg-amber-100'
							}`}>
								<Mic className={`w-5 h-5 ${
									isDark ? 'text-amber-400' : 'text-amber-600'
								}`} />
							</div>
							<h3 className={`text-xl font-semibold ${
								isDark ? 'text-white' : 'text-slate-900'
							}`}>
								Invited Talks
							</h3>
							<span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
								isDark
									? 'bg-slate-800 text-slate-300'
									: 'bg-slate-200 text-slate-600'
							}`}>
								{talks.invited.length}
							</span>
						</motion.div>
						
						<div className="space-y-4">
							{talks.invited.map((talk, index) => (
								<TalkCard
									key={index}
									talk={talk}
									type="invited"
									index={index}
									isDark={isDark}
								/>
							))}
						</div>
					</div>

					{/* Contributed Presentations */}
					<div>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							className="flex items-center gap-3 mb-6"
						>
							<div className={`p-2 rounded-lg ${
								isDark ? 'bg-slate-700' : 'bg-slate-200'
							}`}>
								<Users className={`w-5 h-5 ${
									isDark ? 'text-slate-400' : 'text-slate-500'
								}`} />
							</div>
							<h3 className={`text-xl font-semibold ${
								isDark ? 'text-white' : 'text-slate-900'
							}`}>
								Conference Presentations
							</h3>
							<span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
								isDark
									? 'bg-slate-800 text-slate-300'
									: 'bg-slate-200 text-slate-600'
							}`}>
								{talks.contributed.length}
							</span>
						</motion.div>
						
						<div className="space-y-4">
							{talks.contributed.map((talk, index) => (
								<TalkCard
									key={index}
									talk={talk}
									type="contributed"
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