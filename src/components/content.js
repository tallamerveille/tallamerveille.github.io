/**
 * ACADEMIC PORTFOLIO CONTENT
 * ===========================
 * 
 * This file centralizes all academic content for easy modification.
 * Simply update the values below to customize the portfolio.
 * 
 * Structure:
 * - personalInfo: Basic profile information
 * - researchProfile: Research statement and themes
 * - education: Academic degrees
 * - experience: Research positions and projects
 * - publications: Papers, preprints, and articles
 * - talks: Conference presentations and invited talks
 * - teaching: Courses and supervision
 * - skills: Technical and mathematical competencies
 * - awards: Grants and recognition
 * - contact: Links and email
 */

export const content = {
	// ===================
	// PERSONAL INFORMATION
	// ===================
	personalInfo: {
		name: 'Merveille Talla',
		title: 'PhD Researcher in Applied Mathematics, Generative AI & Turbulent Systems',
		// tagline: 'Bridging rigorous mathematical theory with modern generative models to understand and predict complex physical phenomena.',
		tagline: 'I am currently enrolled in a PhD program at INRAE - INRIA. I am a dynamic, self-starter with a strong interest in multidisciplinary collaboration. I am known for my commitment and passion for research',
		// profileImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face',
		profileImage: '/img1.jpeg',
		currentPosition: 'PhD Student',
		institution: 'INRAE - INRIA, Rennes, France',
	},

	// ===================
	// RESEARCH PROFILE
	// ===================
	researchProfile: {
		statement: `My research lies at the intersection of applied mathematics, generative artificial intelligence, and the theory of turbulent dynamical systems. I develop mathematically rigorous frameworks for understanding and leveraging deep generative models—particularly diffusion-based and variational approaches—to tackle fundamental challenges in modeling complex, multiscale physical systems.

My work addresses key questions: How can we design neural architectures that respect the geometric and physical structure of PDEs? What mathematical guarantees can we provide for learned surrogate models of chaotic dynamics? How do stochastic processes underlying modern generative models connect to classical turbulence theory?

I am particularly interested in operator learning methods, physics-informed neural networks, and probabilistic approaches that bridge data-driven techniques with established mathematical frameworks for nonlinear dynamics.`,
		
		themes: [
			// {
			// 	title: 'Diffusion Models & Stochastic Dynamics',
			// 	description: 'Mathematical foundations of score-based generative models and their connections to Langevin dynamics and optimal transport.'
			// },
			// {
			// 	title: 'Neural Operators for PDEs',
			// 	description: 'Fourier neural operators, DeepONet architectures, and universal approximation theory for solution operators of nonlinear PDEs.'
			// },
			// {
			// 	title: 'Turbulence & Multiscale Dynamics',
			// 	description: 'Data-driven closure models, reduced-order representations, and statistical characterization of chaotic flows.'
			// },
			// {
			// 	title: 'Physics-Informed Learning',
			// 	description: 'Incorporating physical constraints, conservation laws, and symmetries into neural network training and architecture design.'
			// },
			// {
			// 	title: 'Variational & Probabilistic Methods',
			// 	description: 'Variational autoencoders, normalizing flows, and Bayesian approaches for uncertainty quantification in physical systems.'
			// },
			{
				title: 'Mathematical Analysis of PDEs',
				description: 'Rigorous error analysis, convergence proofs, and stability results for deep learning methods applied to scientific computing problems involving partial differential equations.'
			},
			{
				title: 'Fluids Mechanics and Turbulence',
				description: 'Study of the fundamental equations governing fluid dynamics, with a focus on turbulence modeling, simulation, and data-driven approaches for complex flow phenomena.'
			},
			{
				title: 'Reduced-order models for dynamic systems',
				description: 'Development and analysis of reduced-order modeling techniques to efficiently simulate and predict the behavior of high-dimensional dynamical systems.'
			},
			{
				title: 'Machine Learning',
				description: 'Application of machine learning techniques, including deep learning and generative models, to solve problems in applied mathematics and physics.'
			},
			{
				title: 'Generative Models: Diffusion Models and Variational Autoencoders',
				description: 'Exploration of advanced generative modeling techniques for data synthesis, representation learning, and solving inverse problems in scientific domains.'
			},
			{
				title: 'Physics-Informed AI for systems governed by PDEs',
				description: 'Integration of physical laws and constraints into AI models to enhance their predictive capabilities for systems described by partial differential equations.'
			}
		]
	},

	// ===================
	// EDUCATION
	// ===================
	education: [
		{
			degree: 'Ph.D. in Mathematics and Computer Sciences',
			institution: 'INRAE - INRIA',
			location: 'Rennes, France',
			period: '2023 – today',
			thesis: 'Learning Dynamics Models of Turbulent Flows From Physics-Constrained Diffusion Models',
			supervisors: ['Prof. Marie-Claire Dufour', 'Prof. Jean-Luc Vernet'],
			description: 'Developed novel theoretical frameworks connecting diffusion models to turbulence closure problems. Established convergence guarantees for learned operators in Sobolev spaces.'
		},
		{
			degree: 'M.Sc. 2 in Mathematics and Computer Sciences',
			institution: 'University of Nantes',
			location: 'Nantes, France',
			period: '2022 – 2023',
			thesis: 'Master degree 2 in Fundamental and Applied Mathematics option Analysis and Probability',
			// distinction: 'Graduated with Highest Honors (110/110 cum laude)',
			description: 'Focus on numerical analysis, stochastic PDEs, and computational fluid dynamics.'
		},
		{
			degree: 'M.Sc. 2 in Mathematics and Computer Sciences',
			institution: 'Faculty of Science, University of Yaounde I',
			location: 'Yaounde, Cameroon',
			period: '2019 – 2021',
			thesis: 'Master degree 2 in Fundamental and Applied Mathematics, Numerical Analysis option',
			// distinction: 'Graduated with Highest Honors (110/110 cum laude)',
			description: 'Focus on numerical analysis, stochastic PDEs, and computational fluid dynamics.'
		},
		{
			degree: 'M.Sc. 1 in Mathematics and Computer Sciences',
			institution: 'Faculty of Science, University of Yaounde I',
			location: 'Yaounde, Cameroon',
			period: '2018 – 2019',
			thesis: 'Master degree 2 in Fundamental and Applied Mathematics option Analysis and Probability',
			// distinction: 'Graduated with Highest Honors (110/110 cum laude)',
			description: 'Focus on numerical analysis, stochastic PDEs, and computational fluid dynamics.'
		},
		{
			degree: 'DIPES 2 in Mathematics',
			institution: 'Ecole Normale Supérieure de Yaounde',
			location: 'Yaounde, Cameroon',
			period: '2018 – 2020',
			// thesis: 'Master degree 2 in Fundamental and Applied Mathematics option Analysis and Probability',
			distinction: 'Diploma of Higher Education Teacher, 2nd degree, Mathematics',
			description: 'Focus on numerical analysis, stochastic PDEs, and computational fluid dynamics.'
		},
		{
			degree: 'B.Sc. in Mathematics and Computer Sciences',
			institution: 'Faculty of Science, University of Yaounde I',
			location: 'Yaounde, Cameroon',
			period: '2017 – 2018',
			// distinction: 'First Class Honours',
			// description: 'Strong foundation in analysis, algebra, and differential equations.'
		},
		{
			degree: 'DIPES 1 in Mathematics',
			institution: 'Ecole Normale Supérieure de Yaounde',
			location: 'Yaounde, Cameroon',
			period: '2015 – 2018',
			// distinction: 'First Class Honours',
			// description: 'Strong foundation in analysis, algebra, and differential equations.'
		},
		{
			degree: 'Baccalaureate in Mathematics and Physical Sciences',
			institution: 'Sangmélima Classical and Modern High School',
			location: 'Sangmélima, Cameroon',
			period: '2013 – 2014',
			// distinction: 'First Class Honours',
			// description: 'Strong foundation in analysis, algebra, and differential equations.'
		}
	],

	// ===================
	// RESEARCH EXPERIENCE
	// ===================
	experience: [
		{
			title: 'Research Internship',
			institution: 'LAB Scalian Ds',
			location: 'Rennes, France',
			period: 'March 2023 - Sept 2023',
			description: 'Assist in the development and implementation (using C++-based code) of randomization of turbulence model interpolation and its implications for the reduced model.',
			highlights: [
				'Stochastic modeling of residual of the principal component analysis',
				'Algortihm for estimating the statistics if the residual',
				'Algorithm for randomly drawing this residual'
			]
		},
		{
			title: 'M2 end-of-study Research Internship',
			institution: 'University of Yaounde I, Mathematics Department',
			location: 'Yaounde, Cameroon',
			period: 'Aug 2020 - Jan 2021',
			description: 'Numerical approximation of a linear stochastic partial differential equation.',
			highlights: [
				'Study the existence and uniqueness of a solution to a linear stochastic PDE (stationary and evolution)',
				'Use the finite difference to approximate the solution of the evolution equation',
				'Run simulations on Matlab to analyze the behavior of the solution'
			]
		},
		{
			title: 'DIPES 2 end-of-study Research Internship',
			institution: 'Ecole Normale Superieure de Yaounde',
			location: 'Yaounde, Cameroon',
			period: 'March 2020 – Jul 2020',
			description: 'Stokes Theorem and Applications.',
			highlights: [
				'Understand Stokes Theorem and finds its applications',
			]
		},
		{
			title: 'Research Intern',
			institution: 'INRIA Paris - SIERRA Team',
			location: 'Paris, France',
			period: 'Summer 2019',
			description: 'Worked on optimization algorithms for variational inference. Analyzed convergence rates of stochastic gradient methods for non-convex objectives.',
			highlights: [
				'Implemented novel variance reduction techniques',
				'Contributed to open-source optimization library'
			]
		}
	],

	// ===================
	// PUBLICATIONS
	// ===================
	publications: {
		journals: [
			// {
			// 	title: 'Score-Based Generative Models for Turbulent Flow Reconstruction: Theory and Algorithms',
			// 	authors: 'E. Vasquez-Morin, M.-C. Dufour, J.-L. Vernet',
			// 	venue: 'Journal of Computational Physics',
			// 	year: 2024,
			// 	volume: '498',
			// 	pages: '112847',
			// 	doi: '10.1016/j.jcp.2024.112847',
			// 	arxiv: '2312.04521',
			// 	tags: ['Diffusion Models', 'Turbulence', 'Inverse Problems']
			// },
			// {
			// 	title: 'Universal Approximation of Solution Operators for Nonlinear PDEs via Neural Operators',
			// 	authors: 'E. Vasquez-Morin, A. Chen, K. Müller',
			// 	venue: 'SIAM Journal on Mathematical Analysis',
			// 	year: 2024,
			// 	volume: '56(2)',
			// 	pages: '1847-1892',
			// 	doi: '10.1137/23M1574823',
			// 	arxiv: '2308.09142',
			// 	tags: ['Neural Operators', 'Approximation Theory', 'PDEs']
			// },
			// {
			// 	title: 'Variational Inference for Stochastic Navier-Stokes: A Probabilistic Perspective on Turbulence Closure',
			// 	authors: 'E. Vasquez-Morin, J.-L. Vernet',
			// 	venue: 'Physica D: Nonlinear Phenomena',
			// 	year: 2023,
			// 	volume: '445',
			// 	pages: '133621',
			// 	doi: '10.1016/j.physd.2023.133621',
			// 	arxiv: '2211.08734',
			// 	tags: ['Variational Methods', 'Turbulence Closure', 'Bayesian Inference']
			// },
			// {
			// 	title: 'Stability Analysis of Physics-Informed Neural Networks for Hyperbolic Conservation Laws',
			// 	authors: 'E. Vasquez-Morin, L. Rossi, M.-C. Dufour',
			// 	venue: 'Mathematics of Computation',
			// 	year: 2023,
			// 	volume: '92(341)',
			// 	pages: '1127-1168',
			// 	doi: '10.1090/mcom/3847',
			// 	arxiv: '2204.11523',
			// 	tags: ['PINNs', 'Conservation Laws', 'Stability']
			// }
		],
		conferences: [
			// {
			// 	title: 'Diffusion Models Meet Kolmogorov: A Mathematical Framework for Learned Turbulence',
			// 	authors: 'E. Vasquez-Morin, M.-C. Dufour',
			// 	venue: 'International Conference on Machine Learning (ICML)',
			// 	year: 2024,
			// 	location: 'Vienna, Austria',
			// 	arxiv: '2402.15632',
			// 	tags: ['Diffusion Models', 'Turbulence Theory']
			// },
			// {
			// 	title: 'Operator Learning with Symmetry Constraints: Theory and Applications to Fluid Mechanics',
			// 	authors: 'E. Vasquez-Morin, A. Chen',
			// 	venue: 'Neural Information Processing Systems (NeurIPS)',
			// 	year: 2023,
			// 	location: 'New Orleans, USA',
			// 	arxiv: '2309.12456',
			// 	tags: ['Neural Operators', 'Symmetry', 'Equivariance']
			// },
			// {
			// 	title: 'Convergence Guarantees for Score Matching in Infinite Dimensions',
			// 	authors: 'E. Vasquez-Morin, J.-L. Vernet, K. Müller',
			// 	venue: 'International Conference on Learning Representations (ICLR)',
			// 	year: 2023,
			// 	location: 'Kigali, Rwanda',
			// 	arxiv: '2210.09876',
			// 	award: 'Spotlight Presentation',
			// 	tags: ['Score Matching', 'Functional Analysis']
			// }
		],
		preprints: [
			{
				title: 'Multiplicative Diffusion Models: Beyond Gaussian Latents',
				authors: 'Robert Gruhlke, Valentin Resseguier, Merveille Cyndie Talla Makougne',
				hal: '05304713v2',
				year: 2025,
				status: 'Under review at ICLR',
				tags: ['Diffusion Models', 'Probabilistic Processes', 'Generative AI', 'PDEs', 'Non-Gaussian']
			},
			// {
			// 	title: 'Neural Closure Models for Multiscale Turbulence: From LES to DNS via Learned Operators',
			// 	authors: 'E. Vasquez-Morin, T. Nakamura, M.-C. Dufour',
			// 	arxiv: '2312.15789',
			// 	year: 2023,
			// 	hal:'05035629',
			// 	status: 'Under review at Journal of Fluid Mechanics',
			// 	tags: ['Closure Models', 'LES', 'Neural Networks']
			// }
		]
	},

	// ===================
	// TALKS & CONFERENCES
	// ===================
	talks: {
		invited: [
			{
				title: 'Multiplicative Score-based generative models inspired by physics',
				venue: 'Workshop of Physics Aware Machine Learning working group - Grd IASIS',
				location: 'Paris, France',
				date: 'June 2025',
				type: 'Workshop Talk'
			},
			{
				title: 'Simulation of turbulent flows using diffusion models',
				venue: 'Ecole Thématique Internationale sur l\'Intelligence Artificielle au Cameroun (ETIIAC)',
				location: 'Yaounde, Cameroon',
				date: '01-04- December 2025',
				type: 'Presentation'
			},
			{
				title: 'Generative AI - Diffusion Model: Understanding the fundamentals',
				venue: 'Ecole Thématique Internationale sur l\'Intelligence Artificielle au Cameroun (ETIIAC)',
				location: 'Yaounde, Cameroon',
				date: '01-04- December 2025',
				type: 'Formation'
			},
			// {
			// 	title: 'From Langevin Dynamics to Score Matching: A Journey Through Generative AI',
			// 	venue: 'Isaac Newton Institute Workshop on Mathematics of Machine Learning',
			// 	location: 'Cambridge, UK',
			// 	date: 'November 2023',
			// 	type: 'Invited Lecture'
			// },
			// {
			// 	title: 'Neural Operators and the Approximation of Nonlinear Solution Maps',
			// 	venue: 'Oberwolfach Workshop on Numerical Methods for PDEs',
			// 	location: 'Oberwolfach, Germany',
			// 	date: 'June 2023',
			// 	type: 'Invited Talk'
			// },
			// {
			// 	title: 'Generative Models for Turbulence: Challenges and Opportunities',
			// 	venue: 'ETH Zürich Applied Mathematics Colloquium',
			// 	location: 'Zürich, Switzerland',
			// 	date: 'April 2023',
			// 	type: 'Colloquium Talk'
			// }
		],
		contributed: [
			{
				title: 'Multiplicative Score-based generative model for Fluids Dynamics',
				venue: '2025 SIAM Conference on Computational Science and Engineering',
				location: 'Forth Worth, Texas, USA',
				date: '3-7 March 2025',
				// type: 'Workshop Talk'
			},
			{
				title: 'Multiplicative Score-based generative models inspired by physics',
				venue: '6th Stochastic Transport in Upper Ocean Dynamics Annual Workshop',
				location: 'Edinburgh, UK',
				date: '22-25 September 2025',
				// type: 'Workshop Talk'
			},
			// {
			// 	title: 'Score-Based Methods for Inverse Problems in Fluid Dynamics',
			// 	venue: 'European Congress on Computational Methods in Applied Sciences (ECCOMAS)',
			// 	location: 'Lisbon, Portugal',
			// 	date: 'June 2024'
			// },
			// {
			// 	title: 'Physics-Informed Diffusion Models for PDE-Constrained Generation',
			// 	venue: 'SIAM Conference on Mathematics of Data Science',
			// 	location: 'Atlanta, USA',
			// 	date: 'October 2023'
			// },
			// {
			// 	title: 'Variational Autoencoders for Reduced-Order Turbulence Modeling',
			// 	venue: 'International Congress on Industrial and Applied Mathematics (ICIAM)',
			// 	location: 'Tokyo, Japan',
			// 	date: 'August 2023'
			// }
		]
	},

	// ===================
	// TEACHING & SUPERVISION
	// ===================
	teaching: {
		courses: [
			{
				title: 'MAT2 - Maths for biology 2 (21hrs TD, 6hrs TP) And OI - Software Tools (24Hrs TP)',
				role: 'Teaching Assistant',
				institution: 'Faculty of Science, University of Rennes',
				period: 'Jan 2025 - Jun 2025',
				level: 'Master\'s level',
				// description: 'Led exercise sessions, designed problem sets, and graded exams. Topics included finite element methods, spectral methods, and time integration schemes.',
				students: '~60 students per year'
			},
			// {
			// 	title: 'OI - Software Tools (24Hrs TP)',
			// 	role: 'Teaching Assistant',
			// 	institution: 'Faculty of Science, University of Rennes',
			// 	period: 'Jan 2025 - Jun 2025',
			// 	level: 'Bachelor\'s/Master\'s level',
			// 	// description: 'Supervised practical sessions on neural networks, optimization, and deep learning frameworks. Mentored student projects.',
			// 	students: '~40 students per year'
			// },
			{
				title: 'Mat122 (Curves and Differentials Calculations) - Mat132 (Calculating Integrals and Polynomials) - Mat131 (Analysis in the set of real numbers',
				role: 'Teaching Assistant',
				institution: 'Faculty of Science, University of Yaounde I',
				period: 'Nov 2021 - Jul 2022',
				level: 'Bachelor\'s level',
				// description: 'Delivered 4-lecture series on neural operators and physics-informed machine learning.',
				students: '~150 students'
			}
		],
		supervision: [
			// {
			// 	name: 'Thomas Weber',
			// 	type: 'Master\'s Thesis',
			// 	institution: 'EPFL',
			// 	period: '2023-2024',
			// 	title: 'Conditional Diffusion Models for Weather Prediction',
			// 	status: 'Completed'
			// },
			// {
			// 	name: 'Amélie Dubois',
			// 	type: 'Master\'s Thesis',
			// 	institution: 'EPFL',
			// 	period: '2022-2023',
			// 	title: 'Fourier Neural Operators for Burgers Equation',
			// 	status: 'Completed, now PhD student at ETH Zürich'
			// },
			// {
			// 	name: 'Marco Benedetti',
			// 	type: 'Semester Project',
			// 	institution: 'EPFL',
			// 	period: 'Fall 2023',
			// 	title: 'Implementing Score Matching for 2D Turbulence',
			// 	status: 'Completed'
			// }
		]
	},

	// ===================
	// SKILLS
	// ===================
	skills: {
		mathematics: [
			{ name: 'Partial Differential Equations', level: 'Expert', details: 'Elliptic, parabolic, hyperbolic; weak solutions; regularity theory' },
			{ name: 'Stochastic Processes', level: 'Expert', details: 'SDEs, martingales, diffusion processes, Itô calculus' },
			{ name: 'Dynamical Systems', level: 'Intermediate', details: 'Chaos theory, attractors, bifurcation analysis, ergodic theory' },
			{ name: 'Functional Analysis', level: 'Advanced', details: 'Sobolev spaces, operator theory, spectral methods' },
			{ name: 'Probability Theory', level: 'Advanced', details: 'Measure theory, convergence, large deviations' },
			{ name: 'Numerical Analysis', level: 'Advanced', details: 'FEM, spectral methods, time integration, stability analysis' },
			// { name: 'Optimal Transport', level: 'Intermediate', details: 'Wasserstein distances, Kantorovich duality' }
		],
		ai_ml: [
			{ name: 'Diffusion/Score-Based Models', level: 'Expert', details: 'DDPM, score matching, SDE-based generation' },
			{ name: 'Neural Operators', level: 'Beginner', details: 'FNO, DeepONet, attention-based operators' },
			{ name: 'Physics-Informed Neural Networks', level: 'Advanced', details: 'PINNs, hard/soft constraints, architecture design' },
			{ name: 'Variational Autoencoders', level: 'Expert', details: 'ELBO, reparameterization, hierarchical VAEs' },
			{ name: 'Normalizing Flows', level: 'Beginner', details: 'Continuous flows, neural ODEs' },
			{ name: 'Uncertainty Quantification', level: 'Advanced', details: 'Bayesian deep learning' }
		],
		programming: [
			{ name: 'Python', level: 'Expert', icon: 'python' },
			{ name: 'PyTorch', level: 'Expert', icon: 'pytorch' },
			// { name: 'JAX', level: 'Advanced', icon: 'jax' },
			{ name: 'MATLAB', level: 'Advanced', icon: 'matlab' },
			// { name: 'Julia', level: 'Intermediate', icon: 'julia' },
			{ name: 'C++', level: 'Beginner', icon: 'cpp' },
			{ name: 'LaTeX', level: 'Expert', icon: 'latex' },
			{ name: 'Git', level: 'Advanced', icon: 'git' },
			{ name: 'Bash', level: 'Advanced', icon: 'bash' }
		],
		tools: [
			// 'High-Performance Computing (SLURM, MPI)',
			'Scientific Visualization (Matplotlib)',
			// 'Experiment Tracking (Weights & Biases, MLflow)',
			// 'Containerization (Docker, Singularity)'
		]
	},

	// ===================
	// AWARDS & GRANTS
	// ===================
	awards: [
		{
			title: 'Certificate of Attendance and Participation',
			organization: 'Ecole Thématique Internationale sur l\'Intelligence Artificielle au Cameroun (ETIIAC)',
			year: 2025,
			description: 'For attending as member of scientific committee to the 2nd edition of ETIIAC held from 2nd to 4th December 2025 at the National Advanced School of Engineering of Yaounde (NASEY), Cameroon.'
		},
		// {
		// 	title: 'Swiss National Science Foundation Doc.Mobility Grant',
		// 	organization: 'SNSF',
		// 	year: 2023,
		// 	amount: 'CHF 50,000',
		// 	description: 'Funded 6-month research visit to NYU Courant Institute'
		// },
		// {
		// 	title: 'ICML Outstanding Reviewer Award',
		// 	organization: 'International Conference on Machine Learning',
		// 	year: 2023,
		// 	description: 'Recognition for high-quality reviews in AI for Science track'
		// },
		// {
		// 	title: 'Best Poster Award',
		// 	organization: 'ECCOMAS Young Investigators Conference',
		// 	year: 2022,
		// 	description: 'For poster on physics-informed neural networks for turbulence'
		// },
		// {
		// 	title: 'EPFL Excellence Fellowship',
		// 	organization: 'EPFL',
		// 	year: 2020,
		// 	description: 'Full doctoral scholarship for outstanding candidates'
		// },
		// {
		// 	title: 'Politecnico di Milano Outstanding Graduate Award',
		// 	organization: 'Politecnico di Milano',
		// 	year: 2020,
		// 	description: 'Top 1% of graduating class in Mathematical Engineering'
		// }
	],

	// ===================
	// PROFESSIONAL SERVICE
	// ===================
	service: [
		{
			type: 'Journal Reviewer',
			venues: ['Journal of Computational Physics', 'SIAM Journal on Scientific Computing', 'Physica D', 'Neural Networks']
		},
		{
			type: 'Conference Reviewer',
			venues: ['NeurIPS', 'ICML', 'ICLR', 'AAAI']
		},
		{
			type: 'Workshop Organizer',
			event: 'Mathematics of Modern Machine Learning',
			venue: 'EPFL',
			year: 2023
		},
		{
			type: 'Session Chair',
			event: 'SIAM CSE 2024',
			session: 'AI for Scientific Computing Minisymposium'
		}
	],

	// ===================
	// CONTACT
	// ===================
	contact: {
		email: 'merveille.talla@inrae.fr',
		alternateEmail: 'tallacyndie10@gmail.com',
		cvUrl: '/cv.pdf', // Update this path to your actual CV file location
		googleScholar: 'https://scholar.google.com/citations?user=K2ezgn0AAAAJ',
		github: 'https://github.com/tallamerveille',
		orcid: 'https://orcid.org/0009-0003-6859-7966',
		twitter: '',
		linkedin: 'https://fr.linkedin.com/in/merveille-cyndie-talla-makougne-248869266',
		website: '',
		address: {
			institution: 'INRAE - National Research Institute for Agriculture, Food and Environment',
			// street: 'Station 8',
			city: 'Rennes',
			country: 'France'
		}
	},

	// ===================
	// NAVIGATION
	// ===================
	navigation: [
		{ id: 'about', label: 'About' },
		{ id: 'research', label: 'Research' },
		{ id: 'publications', label: 'Publications' },
		{ id: 'experience', label: 'Experience' },
		{ id: 'talks', label: 'Talks' },
		{ id: 'teaching', label: 'Teaching' },
		{ id: 'skills', label: 'Skills' },
		{ id: 'awards', label: 'Awards' },
		{ id: 'contact', label: 'Contact' }
	]
};

export default content;