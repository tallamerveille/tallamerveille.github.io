// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

/**
 * ACADEMIC PORTFOLIO PAGE
 * ========================
 * 
 * Main portfolio page that assembles all sections.
 * 
 * HOW TO CUSTOMIZE:
 * 
 * 1. CONTENT: Edit components/content.js to update all text
 * 
 * 2. COLORS: Modify the theme in components/ThemeContext.jsx
 *    - Light mode colors: themeConfig.light
 *    - Dark mode colors: themeConfig.dark
 * 
 * 3. SECTIONS: Reorder or remove sections by modifying this file
 *    - Each section is an independent component
 *    - Simply move, add, or remove imports and their usage below
 * 
 * 4. TYPOGRAPHY: Uses Tailwind's font-serif for headings
 *    - Modify globals.css to change the font family
 *    - Current: Georgia/Times-based serif for academic feel
 */

import React from 'react';
import { ThemeProvider, useTheme } from './components/ThemeContext';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import ResearchSection from './components/ResearchSection';
import PublicationsSection from './components/PublicationsSection';
import ExperienceSection from './components/ExperienceSection';
import TalksSection from './components/TalksSection';
import TeachingSection from './components/TeachingSection';
import SkillsSection from './components/SkillsSection';
import AwardsSection from './components/AwardsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

// Inner component that uses theme context
function PortfolioContent() {
	const { isDark } = useTheme();
	
	return (
		<div className={`min-h-screen ${isDark ? 'bg-slate-900' : 'bg-white'}`}>
			{/* Fixed Navigation */}
			<Navigation />
			
			{/* Main Content Sections */}
			<main>
				{/* 
				  SECTION ORDER:
				  Rearrange these components to change section order.
				  Each has an id attribute for smooth scroll navigation.
				*/}
				
				{/* 1. Hero / Introduction */}
				<HeroSection />
				
				{/* 2. Research Profile */}
				<ResearchSection />
				
				{/* 3. Publications (includes journals, conferences, preprints) */}
				<PublicationsSection />
				
				{/* 4. Experience & Education */}
				<ExperienceSection />
				
				{/* 5. Talks & Presentations */}
				<TalksSection />
				
				{/* 6. Teaching & Supervision */}
				<TeachingSection />
				
				{/* 7. Skills */}
				<SkillsSection />
				
				{/* 8. Awards & Grants */}
				<AwardsSection />
				
				{/* 9. Contact */}
				<ContactSection />
			</main>
			
			{/* Footer */}
			<Footer />
		</div>
	);
}

// Main page component with ThemeProvider wrapper
export default function Portfolio() {
	return (
		<ThemeProvider>
			<PortfolioContent />
		</ThemeProvider>
	);
}