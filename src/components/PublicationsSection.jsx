/* eslint-disable no-unused-vars */
/**
 * PUBLICATIONS SECTION
 * =====================
 * 
 * Lists journal articles, conference papers, and preprints.
 * Features filtering by type and expandable details.
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, FileText, FileClock, ExternalLink, Award } from 'lucide-react';
import PropTypes from 'prop-types';
import { useTheme } from './ThemeContext';
import { content } from './content';

const tabs = [
	{ id: 'journals', label: 'Journal Articles', icon: BookOpen },
	{ id: 'conferences', label: 'Conference Papers', icon: FileText },
	{ id: 'preprints', label: 'Preprints', icon: FileClock },
];


function PublicationCard({ pub, type, isDark }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -10 }}
			className={`p-6 rounded-xl border transition-all duration-300 ${
				isDark
					? 'bg-slate-900/30 border-slate-700 hover:border-slate-600'
					: 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-md'
			}`}
		>
			{/* Award Badge */}
			{pub.award && (
				<div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium mb-3 ${
					isDark
						? 'bg-amber-500/20 text-amber-300'
						: 'bg-amber-100 text-amber-800'
				}`}>
					<Award className="w-3 h-3" />
					{pub.award}
				</div>
			)}
			
			{/* Title */}
			<h4 className={`font-semibold text-lg mb-2 leading-tight ${
				isDark ? 'text-white' : 'text-slate-900'
			}`}>
				{pub.title}
			</h4>
			
			{/* Authors */}
			<p className={`text-sm mb-3 ${
				isDark ? 'text-slate-400' : 'text-slate-600'
			}`}>
				{pub.authors}
			</p>
			
			{/* Venue & Details */}
			<div className={`text-sm mb-4 ${
				isDark ? 'text-slate-300' : 'text-slate-700'
			}`}>
				<span className="font-medium">{pub.venue}</span>
				{pub.volume && <span>, {pub.volume}</span>}
				{pub.pages && <span>: {pub.pages}</span>}
				<span className={isDark ? 'text-slate-500' : 'text-slate-400'}> ({pub.year})</span>
				{pub.location && (
					<span className={isDark ? 'text-slate-500' : 'text-slate-400'}> — {pub.location}</span>
				)}
			</div>
			
			{/* Status for preprints */}
			{pub.status && (
				<p className={`text-sm italic mb-4 ${
					isDark ? 'text-slate-400' : 'text-slate-500'
				}`}>
					{pub.status}
				</p>
			)}
			
			{/* Tags */}
			<div className="flex flex-wrap gap-2 mb-4">
				{pub.tags?.map((tag, i) => (
					<span
						key={i}
						className={`px-2.5 py-1 rounded-full text-xs font-medium ${
							isDark
								? 'bg-slate-800 text-slate-300'
								: 'bg-slate-100 text-slate-600'
						}`}
					>
						{tag}
					</span>
				))}
			</div>
			
			{/* Links */}
			<div className="flex flex-wrap gap-3">
				{pub.doi && (
					<a
						href={`https://doi.org/${pub.doi}`}
						target="_blank"
						rel="noopener noreferrer"
						className={`inline-flex items-center gap-1.5 text-sm font-medium transition-colors ${
							isDark
								? 'text-amber-400 hover:text-amber-300'
								: 'text-amber-600 hover:text-amber-700'
						}`}
					>
						<ExternalLink className="w-3.5 h-3.5" />
						DOI
					</a>
				)}
				{pub.arxiv && (
					<a
						href={`https://arxiv.org/abs/${pub.arxiv}`}
						target="_blank"
						rel="noopener noreferrer"
						className={`inline-flex items-center gap-1.5 text-sm font-medium transition-colors ${
							isDark
								? 'text-amber-400 hover:text-amber-300'
								: 'text-amber-600 hover:text-amber-700'
						}`}
					>
						<ExternalLink className="w-3.5 h-3.5" />
						arXiv:{pub.arxiv}
					</a>
				)}
				{pub.hal && (
					<a
						href={`https://hal.science/hal-${pub.hal}`}
						target="_blank"
						rel="noopener noreferrer"
						className={`inline-flex items-center gap-1.5 text-sm font-medium transition-colors ${
							isDark
								? 'text-amber-400 hover:text-amber-300'
								: 'text-amber-600 hover:text-amber-700'
						}`}
					>
						<ExternalLink className="w-3.5 h-3.5" />
						hal-{pub.hal}
					</a>
				)}
			</div>
		</motion.div>
	);
}

PublicationCard.propTypes = {
	pub: PropTypes.shape({
		title: PropTypes.string.isRequired,
		authors: PropTypes.string.isRequired,
		venue: PropTypes.string.isRequired,
		year: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
		award: PropTypes.string,
		volume: PropTypes.string,
		pages: PropTypes.string,
		location: PropTypes.string,
		status: PropTypes.string,
		tags: PropTypes.arrayOf(PropTypes.string),
		doi: PropTypes.string,
		arxiv: PropTypes.string
	}).isRequired,
	type: PropTypes.string.isRequired,
	isDark: PropTypes.bool.isRequired
};

export default function PublicationsSection() {
	const { isDark } = useTheme();
	const [activeTab, setActiveTab] = useState('journals');
	const { publications } = content;

	const getPublications = () => {
		switch (activeTab) {
		case 'journals':
			return publications.journals;
		case 'conferences':
			return publications.conferences;
		case 'preprints':
			return publications.preprints;
		default:
			return [];
		}
	};

	return (
		<section
			id="publications"
			className={`py-24 ${isDark ? 'bg-slate-900' : 'bg-slate-50'}`}
		>
			<div className="max-w-5xl mx-auto px-6">
				{/* Section Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="text-center mb-12"
				>
					<h2 className={`font-serif text-3xl md:text-4xl font-medium mb-4 ${
						isDark ? 'text-white' : 'text-slate-900'
					}`}>
						Publications
					</h2>
					<div className={`w-16 h-1 mx-auto rounded-full ${
						isDark ? 'bg-amber-400' : 'bg-amber-600'
					}`} />
				</motion.div>

				{/* Tab Navigation */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.1 }}
					className="flex flex-wrap justify-center gap-2 mb-10"
				>
					{tabs.map((tab) => {
						const Icon = tab.icon;
						const count = publications[tab.id]?.length || 0;
						
						return (
							<button
								key={tab.id}
								onClick={() => setActiveTab(tab.id)}
								className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
									activeTab === tab.id
										? isDark
											? 'bg-amber-500 text-slate-900'
											: 'bg-slate-900 text-white'
										: isDark
											? 'bg-slate-800 text-slate-300 hover:bg-slate-700'
											: 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
								}`}
							>
								<Icon className="w-4 h-4" />
								{tab.label}
								<span className={`ml-1 px-2 py-0.5 rounded-full text-xs ${
									activeTab === tab.id
										? isDark
											? 'bg-amber-600 text-slate-900'
											: 'bg-slate-700 text-white'
										: isDark
											? 'bg-slate-700 text-slate-400'
											: 'bg-slate-100 text-slate-500'
								}`}>
									{count}
								</span>
							</button>
						);
					})}
				</motion.div>

				{/* Publications Grid */}
				<div className="grid gap-6">
					<AnimatePresence mode="wait">
						{getPublications().map((pub, index) => (
							<PublicationCard
								key={`${activeTab}-${index}`}
								pub={pub}
								type={activeTab}
								isDark={isDark}
							/>
						))}
					</AnimatePresence>
				</div>
			</div>
		</section>
	);
}