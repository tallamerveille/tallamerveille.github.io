
/**
 * CONTACT SECTION
 * ================
 * 
 * Contact information and academic links.
 */

import React from 'react';
import { motion } from 'framer-motion';
import { 
	Mail, 
	MapPin, 
	ExternalLink, 
	Github, 
	Linkedin, 
	Twitter,
	BookOpen,
	Globe
} from 'lucide-react';
import { useTheme } from './ThemeContext';
import { content } from './content';

export default function ContactSection() {
	const { isDark } = useTheme();
	const { contact } = content;

	const socialLinks = [
		{ 
			name: 'Google Scholar', 
			url: contact.googleScholar, 
			icon: BookOpen,
			color: 'hover:text-blue-500'
		},
		{ 
			name: 'GitHub', 
			url: contact.github, 
			icon: Github,
			color: 'hover:text-slate-900 dark:hover:text-white'
		},
		{ 
			name: 'ORCID', 
			url: contact.orcid, 
			icon: ExternalLink,
			color: 'hover:text-green-600'
		},
		{ 
			name: 'LinkedIn', 
			url: contact.linkedin, 
			icon: Linkedin,
			color: 'hover:text-blue-600'
		},
		{ 
			name: 'Twitter', 
			url: contact.twitter, 
			icon: Twitter,
			color: 'hover:text-sky-500'
		},
		{ 
			name: 'Website', 
			url: contact.website, 
			icon: Globe,
			color: 'hover:text-amber-500'
		},
	];

	return (
		<section
			id="contact"
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
						Get in Touch
					</h2>
					<div className={`w-16 h-1 mx-auto rounded-full ${
						isDark ? 'bg-amber-400' : 'bg-amber-600'
					}`} />
					<p className={`mt-6 max-w-xl mx-auto ${
						isDark ? 'text-slate-300' : 'text-slate-600'
					}`}>
						I am actively seeking postdoctoral positions in applied mathematics, 
						scientific machine learning, and computational physics. 
						Feel free to reach out for collaboration or inquiries.
					</p>
				</motion.div>

				<div className="grid md:grid-cols-2 gap-8">
					{/* Contact Card */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className={`p-8 rounded-2xl ${
							isDark
								? 'bg-gradient-to-br from-slate-800 to-slate-800/50 border border-slate-700'
								: 'bg-white border border-slate-200 shadow-lg'
						}`}
					>
						<h3 className={`font-semibold text-xl mb-6 ${
							isDark ? 'text-white' : 'text-slate-900'
						}`}>
							Contact Information
						</h3>
						
						<div className="space-y-5">
							{/* Primary Email */}
							<a
								href={`mailto:${contact.email}`}
								className={`flex items-start gap-4 group ${
									isDark ? 'text-slate-300' : 'text-slate-600'
								}`}
							>
								<div className={`p-2.5 rounded-lg ${
									isDark ? 'bg-amber-500/10' : 'bg-amber-100'
								}`}>
									<Mail className={`w-5 h-5 ${
										isDark ? 'text-amber-400' : 'text-amber-600'
									}`} />
								</div>
								<div>
									<p className={`text-sm ${
										isDark ? 'text-slate-400' : 'text-slate-500'
									}`}>
										Academic Email
									</p>
									<p className={`font-medium group-hover:text-amber-500 transition-colors ${
										isDark ? 'text-white' : 'text-slate-900'
									}`}>
										{contact.email}
									</p>
								</div>
							</a>
							
							{/* Alternate Email */}
							<a
								href={`mailto:${contact.alternateEmail}`}
								className={`flex items-start gap-4 group ${
									isDark ? 'text-slate-300' : 'text-slate-600'
								}`}
							>
								<div className={`p-2.5 rounded-lg ${
									isDark ? 'bg-slate-700' : 'bg-slate-100'
								}`}>
									<Mail className={`w-5 h-5 ${
										isDark ? 'text-slate-400' : 'text-slate-500'
									}`} />
								</div>
								<div>
									<p className={`text-sm ${
										isDark ? 'text-slate-400' : 'text-slate-500'
									}`}>
										Personal Email
									</p>
									<p className={`font-medium group-hover:text-amber-500 transition-colors ${
										isDark ? 'text-white' : 'text-slate-900'
									}`}>
										{contact.alternateEmail}
									</p>
								</div>
							</a>
							
							{/* Address */}
							<div className={`flex items-start gap-4 ${
								isDark ? 'text-slate-300' : 'text-slate-600'
							}`}>
								<div className={`p-2.5 rounded-lg ${
									isDark ? 'bg-slate-700' : 'bg-slate-100'
								}`}>
									<MapPin className={`w-5 h-5 ${
										isDark ? 'text-slate-400' : 'text-slate-500'
									}`} />
								</div>
								<div>
									<p className={`text-sm ${
										isDark ? 'text-slate-400' : 'text-slate-500'
									}`}>
										Office Address
									</p>
									<p className={`font-medium ${
										isDark ? 'text-white' : 'text-slate-900'
									}`}>
										{contact.address.institution}
									</p>
									<p className={isDark ? 'text-slate-400' : 'text-slate-600'}>
										{contact.address.street}
									</p>
									<p className={isDark ? 'text-slate-400' : 'text-slate-600'}>
										{contact.address.city}, {contact.address.country}
									</p>
								</div>
							</div>
						</div>
					</motion.div>

					{/* Academic Links */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className={`p-8 rounded-2xl ${
							isDark
								? 'bg-gradient-to-br from-slate-800 to-slate-800/50 border border-slate-700'
								: 'bg-white border border-slate-200 shadow-lg'
						}`}
					>
						<h3 className={`font-semibold text-xl mb-6 ${
							isDark ? 'text-white' : 'text-slate-900'
						}`}>
							Academic Profiles
						</h3>
						
						<div className="grid grid-cols-2 gap-4">
							{socialLinks.map((link, index) => {
								const Icon = link.icon;
								return (
									<a
										key={index}
										href={link.url}
										target="_blank"
										rel="noopener noreferrer"
										className={`flex items-center gap-3 p-4 rounded-xl transition-all duration-200 group ${
											isDark
												? 'bg-slate-700/50 hover:bg-slate-700 text-slate-300 hover:text-white'
												: 'bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-slate-900'
										}`}
									>
										<Icon className={`w-5 h-5 transition-colors ${link.color}`} />
										<span className="font-medium text-sm">{link.name}</span>
									</a>
								);
							})}
						</div>
						
						{/* CTA Button */}
						<motion.a
							href={`mailto:${contact.email}?subject=Postdoctoral Position Inquiry`}
							whileHover={{ scale: 1.02 }}
							whileTap={{ scale: 0.98 }}
							className={`mt-6 w-full flex items-center justify-center gap-2 py-4 rounded-xl font-semibold transition-all duration-200 ${
								isDark
									? 'bg-amber-500 text-slate-900 hover:bg-amber-400'
									: 'bg-slate-900 text-white hover:bg-slate-800'
							}`}
						>
							<Mail className="w-5 h-5" />
							Contact for Opportunities
						</motion.a>
					</motion.div>
				</div>
			</div>
		</section>
	);
}