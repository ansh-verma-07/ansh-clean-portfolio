import { JWt, alkemy, ainewsaggregator, launchpad, skillxchange, dental_learning, vibehack } from '@/public';
import { Facebook, Github, Globe, Instagram, Linkedin, Mail, MessageCircleMore, Newspaper, Twitter } from 'lucide-react';

import {
	SiNextdotjs,
	SiTypescript,
	SiJavascript,
	SiNetlify,
	SiVite,
	SiFirebase,
	SiShadcnui,
	SiExpress,
	SiFlask,
	SiHuggingface,
	SiGoogleappsscript,
	SiGooglesheets,
	SiVercel,
	SiFlutter,
	SiDart,
	SiCanva,
	SiPhp,
	SiPrettier
} from "react-icons/si";
import {
	FaCss3Alt,
	FaHtml5,
	FaNodeJs,
	FaPython,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact, FaFigma, FaJava, FaGit, FaNpm } from "react-icons/fa6";
import { DiMongodb, DiRedis } from "react-icons/di";
import { BiLogoPostgresql, BiLogoMongodb } from "react-icons/bi";
import { TbBrandFramerMotion } from "react-icons/tb";
import { GrMysql } from "react-icons/gr";
import { VscVscode } from "react-icons/vsc";
import { IoLogoGithub } from "react-icons/io";

export const skillItems = [
	{ id: 1, Icon: SiNextdotjs, name: "Next.js" },
	{ id: 2, Icon: FaReact, name: "React" },
	{ id: 3, Icon: SiTypescript, name: "TypeScript" },
	{ id: 4, Icon: SiJavascript, name: "JavaScript" },
	{ id: 5, Icon: RiTailwindCssFill, name: "Tailwind" },
	{ id: 6, Icon: FaNodeJs, name: "Node.js" },
	{ id: 7, Icon: SiExpress, name: "Express.js" },
	{ id: 8, Icon: BiLogoMongodb, name: "MongoDB" },
	{ id: 9, Icon: BiLogoPostgresql, name: "PostgreSQL" },
	{ id: 10, Icon: GrMysql, name: "MySQL" },
	{ id: 11, Icon: SiFirebase, name: "Firebase" },
	{ id: 12, Icon: DiRedis, name: "Redis" },
	{ id: 13, Icon: FaPython, name: "Python" },
	{ id: 14, Icon: SiFlask, name: "Flask" },
	{ id: 15, Icon: SiHuggingface, name: "Hugging Face" },
	{ id: 16, Icon: SiShadcnui, name: "Shadcn UI" },
	{ id: 17, Icon: TbBrandFramerMotion, name: "Framer Motion" },
	{ id: 18, Icon: SiFlutter, name: "Flutter" },
	{ id: 19, Icon: SiDart, name: "Dart" },
	{ id: 20, Icon: FaGit, name: "Git" },
	{ id: 21, Icon: IoLogoGithub, name: "GitHub" },
	{ id: 22, Icon: SiVite, name: "Vite" },
	{ id: 23, Icon: SiVercel, name: "Vercel" },
	{ id: 24, Icon: SiNetlify, name: "Netlify" },
	{ id: 25, Icon: VscVscode, name: "VS Code" },
	{ id: 26, Icon: FaNpm, name: "npm" },
	{ id: 27, Icon: JWt, name: "JWT" },
	{ id: 28, Icon: SiPrettier, name: "Prettier" },
	{ id: 29, Icon: FaFigma, name: "Figma" },
	{ id: 30, Icon: SiCanva, name: "Canva" },
	{ id: 31, Icon: FaHtml5, name: "HTML" },
	{ id: 32, Icon: FaCss3Alt, name: "CSS" },
	{ id: 33, Icon: FaJava, name: "Java" },
	{ id: 34, Icon: SiPhp, name: "PHP" },
	{ id: 35, Icon: SiGoogleappsscript, name: "Google Apps Script" },
	{ id: 36, Icon: SiGooglesheets, name: "Google Sheets" },
];


// Navbar
export const navbarItems = [
	{
		id: 1,
		title: 'About',
		href: '/about',
	},
	{
		id: 2,
		title: 'Projects',
		href: '/projects',
	},
	{
		id: 3,
		title: 'Skills',
		href: '/skills',
	},

	{
		id: 5,
		title: 'LinkTree',
		href: '/me',
	},
	{
		id: 6,
		title: 'Contact us',
		href: '/contact',
	},
];

// Footer
export const footerItems = [
	{
		id: 1,
		title: 'Github',
		url: 'https://github.com/verma07ansh',
		imageSrc: '',
	},
	{
		id: 2,
		title: 'LinkedIn',
		url: 'https://www.linkedin.com/in/ansh-verma-37504b2b7/',
		imageSrc: '',
	},
	{
		id: 3,
		title: 'Instagram',
		url: 'https://www.instagram.com/verma_07ansh/',
		imageSrc: '',
	},
	{
		id: 4,
		title: 'Twitter',
		url: 'https://x.com/VERMA07ANSH',
		imageSrc: '',
	},
];



// Projects
export const projectsItem = [
	{
		id: 1,
		slug: 'alkemy-2025',
		title: 'Alkemy 2025',
		src: alkemy,
		role: 'Lead Frontend Developer & Interactive Designer',
		client: 'Bharati Vidyapeeth University DET & DMS',
		timeline: 'Jan 2025 - Feb 2025',
		challengeTitle: 'Modernizing College Traditions with a Medieval Flare',
		solutionTitle: 'An Interactive Portal combining Medieval Aesthetics with modern React',
		summary: [
			"<strong>Alkemy 2025</strong> is the annual college event website for <strong>Bharati Vidyapeeth's Department of Engineering and Technology (DET)</strong> and <strong>Department of Management Studies (DMS)</strong> in Kharghar, Navi Mumbai. It serves as a digital platform for event information, registration, and live updates.",
			"The website embraces a <strong>medieval-inspired theme</strong>, offering an engaging and interactive user experience. It features a dynamic event calendar, categorized event filters, real-time registration system, and a dedicated Student Council directory showcasing the team behind Alkemy.",
			"Designed with <strong>React + TypeScript</strong> and styled using <strong>Tailwind CSS</strong>, Alkemy 2025 combines performance, aesthetics, and usability. With <strong>Framer Motion</strong> animations and a fully responsive layout, it ensures seamless navigation across all devices."
		],
		repoUrl: 'https://github.com/verma07ansh/Alkemy-2025',
		liveUrl: 'https://alkemy-bvdu-2025.netlify.app/',
		stack: ['React', 'TypeScript', 'Tailwind', 'Framer Motion', 'Vite', 'Hostinger', 'Netlify'],
		gallery: [
			{
				image: '/projects-screenshots/alkemy2025/1.png',
				caption: 'Medieval-themed hero section with dynamic event calendar.',
			},
			{
				image: '/projects-screenshots/alkemy2025/2.png',
				caption: 'Event registration interface with categorized filters.',
			},
			{
				image: '/projects-screenshots/alkemy2025/3.png',
				caption: 'Student Council directory showcase.',
			},
			{
				image: '/projects-screenshots/alkemy2025/4.png',
				caption: 'Responsive about page with dynamic details view.',
			},
		],
		links: [
			{
				id: 1,
				title: 'React',
				href: 'https://react.dev/',
			},
			{
				id: 2,
				title: 'TypeScript',
				href: 'https://www.typescriptlang.org/',
			},
			{
				id: 3,
				title: 'Tailwind',
				href: 'https://tailwindcss.com/',
			},
			{
				id: 4,
				title: 'Framer Motion',
				href: 'https://www.framer.com/motion/',
			},
		],
	},
	{
		id: 2,
		slug: 'skillxchange',
		title: 'SkillXChange',
		src: skillxchange,
		role: 'Full Stack Architect & UX Designer',
		client: 'Academic Open Source Project',
		timeline: 'Oct 2024 - Dec 2024',
		challengeTitle: 'Removing Money from Peer Learning Systems',
		solutionTitle: 'A Secure, Real-Time Skill-Bartering Hub powered by Firebase',
		summary: [
			"<strong>SkillXChange</strong> is a collaborative web platform that redefines how people learn and grow by enabling <strong>skill bartering</strong> — users can exchange their expertise with others instead of using money. Whether you're a developer learning design or a photographer teaching editing, SkillXChange connects you with peers for mutual learning and collaboration.",
			"Built with <strong>React.js</strong>, <strong>Vite</strong>, and <strong>Tailwind CSS</strong>, and powered by <strong>Firebase</strong> for authentication and database management, the platform emphasizes real-time communication, secure user access, and smart skill matching. It provides a responsive, intuitive interface for discovering, requesting, and managing skill exchanges seamlessly.",
			"Key features include <strong>Firebase authentication</strong> with secure routing, <strong>intelligent skill matching</strong> between users, <strong>real-time chat rooms</strong> for connected learners, and a full-featured <strong>Admin Dashboard</strong> for monitoring, moderation, and analytics. It fosters a global learning community built on knowledge exchange rather than transactions."
		],
		repoUrl: 'https://github.com/verma07ansh/SkillXChange',
		liveUrl: 'https://skillxchanged.netlify.app/',
		stack: ['React', 'TypeScript', 'Vite', 'Tailwind', 'Firebase', 'Netlify'],
		gallery: [
			{
				image: '/projects-screenshots/skillXChange/1.png',
				caption: 'Skill bartering platform homepage.',
			},
			{
				image: '/projects-screenshots/skillXChange/2.png',
				caption: 'Intelligent skill matching interface.',
			},
			{
				image: '/projects-screenshots/skillXChange/3.png',
				caption: 'User profile and skill management.',
			},
			{
				image: '/projects-screenshots/skillXChange/4.png',
				caption: 'Responsive skill exchange request view.',
			},
			{
				image: '/projects-screenshots/skillXChange/5.png',
				caption: 'Real-time chat room for connected learners.',
			},
			{
				image: '/projects-screenshots/skillXChange/6.png',
				caption: 'Admin dashboard for monitoring and analytics.',
			},
		],
		links: [
			{
				id: 1,
				title: 'React',
				href: 'https://react.dev/',
			},
			{
				id: 2,
				title: 'TypeScript',
				href: 'https://www.typescriptlang.org/',
			},
			{
				id: 3,
				title: 'Firebase',
				href: 'https://firebase.google.com/',
			},
			{
				id: 4,
				title: 'Tailwind',
				href: 'https://tailwindcss.com/',
			},
		],
	},
	{
		id: 3,
		slug: 'modern-blogging-platform',
		title: 'Modern Blogging Platform',
		src: vibehack,
		role: 'Senior Full Stack & Infrastructure Engineer',
		client: 'Developer Community Showcase',
		timeline: 'Feb 2025 - Mar 2025',
		challengeTitle: 'Scaling Rich-Text Publishing for Modern Web Developers',
		solutionTitle: 'A Scalable MERN Stack Platform Optimized with Redis Caching',
		summary: [
			"<strong>Modern Blogging Platform</strong> is a next-generation content creation ecosystem designed for modern writers and developers. It empowers users to <strong>create, share, and inspire</strong> through a robust, secure, and data-driven blogging environment — combining elegant design with powerful backend architecture.",
			"The platform features a <strong>rich text editor</strong> with real-time preview, <strong>JWT-based authentication</strong> with role-based access, and <strong>AI-assisted content moderation</strong>. With a responsive design, advanced caching using <strong>Redis</strong>, and optimized MongoDB queries, it ensures lightning-fast performance and seamless user experience across devices.",
			"Its architecture integrates a <strong>React + TypeScript frontend</strong> with <strong>Express.js, MongoDB,</strong> and <strong>Redis backend</strong>, forming a scalable, secure, and feature-rich ecosystem. It supports multiple user roles — Guest, Author, and Admin — each equipped with tailored privileges for content creation, engagement, and moderation.",
			"Key highlights include <strong>deep analytics dashboards</strong>, <strong>real-time engagement tracking</strong>, <strong>secure session management</strong>, and an <strong>AI-powered moderation suite</strong>. Designed with performance, scalability, and user experience at its core, this project represents a complete full-stack blogging solution."
		],
		repoUrl: 'https://github.com/verma07ansh/VIBE-HACK-2025',
		liveUrl: 'https://vibe-hack-2025-hmm5.vercel.app/',
		stack: ['React', 'TypeScript', 'Tailwind', 'Shadcn UI', 'Framer Motion', 'Vite', 'Node.js', 'Express', 'MongoDB', 'Redis', 'JWT', 'Vercel'],
		gallery: [
			{
				image: '/projects-screenshots/modernbloggingplatform/1.png',
				caption: 'Modern blogging platform homepage.',
			},
			{
				image: '/projects-screenshots/modernbloggingplatform/2.png',
				caption: 'Arciles page to view and read blog posts.',
			},
			{
				image: '/projects-screenshots/modernbloggingplatform/3.png',
				caption: 'Responsive blog post view.',
			},
			{
				image: '/projects-screenshots/modernbloggingplatform/4.png',
				caption: 'Blog post creation with rich text editor.',
			},
			{
				image: '/projects-screenshots/modernbloggingplatform/5.png',
				caption: 'Role-based access control interface.',
			},
			{
				image: '/projects-screenshots/modernbloggingplatform/6.png',
				caption: 'Responsive Admin dashboard with analytics.',
			},
		],
		links: [
			{
				id: 1,
				title: 'React',
				href: 'https://react.dev/',
			},
			{
				id: 2,
				title: 'TypeScript',
				href: 'https://www.typescriptlang.org/',
			},
			{
				id: 3,
				title: 'Express.js',
				href: 'https://expressjs.com/',
			},
			{
				id: 4,
				title: 'MongoDB',
				href: 'https://www.mongodb.com/',
			},
			{
				id: 5,
				title: 'Redis',
				href: 'https://redis.io/',
			},
		],
	},
	{
		id: 4,
		slug: 'patient-awareness-system',
		title: 'Patient Awareness System',
		src: dental_learning,
		role: 'Lead Developer & Localization Specialist',
		client: 'Bharati Vidyapeeth Dental College & Hospital',
		timeline: 'Nov 2024 - Jan 2025',
		challengeTitle: 'Making Dental Care Knowledge Accessible Across Language Barriers',
		solutionTitle: 'A Lightweight Multilingual Knowledge System with Interactive Maps',
		summary: [
			"The <strong>Patient Awareness System</strong> is a multilingual web portal developed for <strong>Bharati Vidyapeeth Dental College and Hospital, Navi Mumbai</strong>. It serves as an interactive information platform offering comprehensive details about <strong>dental treatments, services, doctors, and courses</strong>, while also featuring a secure admin panel for content management.",
			"Built using <strong>React + TypeScript</strong> and powered by <strong>Firebase</strong>, the system integrates modern web technologies such as <strong>Tailwind CSS</strong>, <strong>Lucide Icons</strong>, and <strong>Framer Motion</strong> for an elegant and responsive user experience. The platform is divided into three localized versions — <strong>English, Hindi, and Marathi</strong> — each maintaining the same structure and functionality, ensuring accessibility for a diverse audience.",
			"For visitors, it offers detailed sections on treatments, departments, and courses, along with an <strong>interactive campus map</strong> and comprehensive contact details. For administrators, the platform includes a <strong>secure admin dashboard</strong> for managing treatments, uploading videos, updating FAQs, and modifying service data. The multi-language implementation ensures consistent, localized healthcare communication for patients and learners alike."
		],
		repoUrl: 'https://github.com/verma07ansh/Dental-Learning-Website',
		liveUrl: 'https://dental-learning.netlify.app/',
		stack: ['React', 'TypeScript', 'Vite', 'Tailwind', 'Framer Motion', 'Lucide', 'Firebase', 'Netlify'],
		gallery: [
			{
				image: '/projects-screenshots/patientAwarenessSystem/1.png',
				caption: 'Homepage with treatment information.',
			},
			{
				image: '/projects-screenshots/patientAwarenessSystem/2.png',
				caption: 'Interactive campus map',
			},
			{
				image: '/projects-screenshots/patientAwarenessSystem/3.png',
				caption: 'Admin dashboard for content management.',
			},
			{
				image: '/projects-screenshots/patientAwarenessSystem/4.png',
				caption: 'Service details page.',
			},
			{
				image: '/projects-screenshots/patientAwarenessSystem/5.png',
				caption: 'Treatment video library.',
			},
			{
				image: '/projects-screenshots/patientAwarenessSystem/6.png',
				caption: 'Interactive campus map',
			},
		],
		links: [
			{
				id: 1,
				title: 'React',
				href: 'https://react.dev/',
			},
			{
				id: 2,
				title: 'TypeScript',
				href: 'https://www.typescriptlang.org/',
			},
			{
				id: 3,
				title: 'Firebase',
				href: 'https://firebase.google.com/',
			},
			{
				id: 4,
				title: 'Tailwind',
				href: 'https://tailwindcss.com/',
			},
		],
	},
	{
		id: 5,
		slug: 'ai-news-aggregator',
		title: 'AI News Aggregator',
		src: ainewsaggregator,
		role: 'NLP Engineer & Lead Architect',
		client: 'Academic AI Research Showcase',
		timeline: 'Sep 2024 - Oct 2024',
		challengeTitle: 'Mitigating AI Hallucinations in Automated News Summaries',
		solutionTitle: 'A Flask & React Dashboard with Entity Validation & Sentiment Scoring',
		summary: [
			"<strong>AI News Aggregator with Smart Summarization</strong> is a modern, AI-driven news platform that consolidates articles from multiple trusted sources and generates concise summaries using advanced natural language models. It leverages the <strong>BART (facebook/bart-large-cnn)</strong> model to produce factual, context-preserving summaries while incorporating mechanisms to prevent hallucination or misinformation.",
			"The system features <strong>multi-source aggregation</strong>, <strong>real-time updates</strong>, and <strong>sentiment analysis</strong> for each article. Users can filter news by category, search specific topics, and switch between <strong>dark and light themes</strong> for a modern reading experience. It ensures that summaries remain faithful to original content through <strong>entity validation</strong> and <strong>extractive fallback</strong> logic.",
			"Built with <strong>React 18 + TypeScript</strong> and <strong>Tailwind CSS</strong> on the frontend, and a <strong>Flask (Python)</strong> backend handling AI processing, the project combines efficient data fetching with deep NLP integration. The backend also uses <strong>BeautifulSoup</strong> and <strong>Newspaper3k</strong> for parsing and extracting article content, while the <strong>Transformers</strong> library powers intelligent summarization and hallucination prevention.",
			"Comprehensive tests ensure reliability across diverse article types, achieving accurate summarization, entity preservation, and performance optimization. The platform demonstrates practical application of AI in journalism and real-time information systems."
		],
		repoUrl: 'https://github.com/verma07ansh/NEWS-AGGREGATOR',
		liveUrl: 'https://github.com/verma07ansh/NEWS-AGGREGATOR',
		stack: ['React', 'TypeScript', 'Vite', 'Tailwind', 'Python', 'Flask', 'Hugging Face', 'Newspaper3k'],
		gallery: [
			{
				image: '/projects-screenshots/ai-news-aggregator/1.png',
				caption: 'AI-powered news aggregation dashboard.',
			},
			{
				image: '/projects-screenshots/ai-news-aggregator/2.png',
				caption: 'Page before AI summarization and sentiment analysis.',
			},
			{
				image: '/projects-screenshots/ai-news-aggregator/3.png',
				caption: 'Page after AI summarization and sentiment analysis.',
			},
		],
		links: [
			{
				id: 1,
				title: 'React',
				href: 'https://react.dev/',
			},
			{
				id: 2,
				title: 'TypeScript',
				href: 'https://www.typescriptlang.org/',
			},
			{
				id: 3,
				title: 'Flask',
				href: 'https://flask.palletsprojects.com/',
			},
			{
				id: 4,
				title: 'Hugging Face',
				href: 'https://huggingface.co/',
			},
		],
	},
	{
		id: 6,
		slug: 'ecell-launchpad',
		title: 'E-Cell Launchpad',
		src: launchpad,
		role: 'Frontend Architect & Contributor',
		client: 'University Entrepreneurship Cell',
		timeline: 'Jul 2024 - Aug 2024',
		challengeTitle: 'Connecting Student Innovators with Mentors and Capital',
		solutionTitle: 'A Dynamic Launchpad and Live Networking Showcase',
		summary: [
			"<strong>E-Cell Launchpad</strong> is a dynamic web platform developed to empower student entrepreneurs by offering them access to mentorship, startup resources, and a vibrant community of innovators.",
			"<strong>E-Cell Launchpad</strong> emphasizes collaboration and community-building, integrating social media links to connect users directly with mentors, founders, and event organizers."
		],
		repoUrl: 'https://github.com/verma07ansh/E-cell-Launchpad',
		liveUrl: 'https://launchpad-by-ecell.netlify.app/',
		stack: ['React', 'Tailwind', 'Vite', 'Framer Motion', 'React Router', 'Google Apps Script', 'Google Sheets'],
		gallery: [
			{
				image: '/projects-screenshots/ecell-launchpad/1.png',
				caption: 'E-Cell Launchpad homepage.',
			},
			{
				image: '/projects-screenshots/ecell-launchpad/2.png',
				caption: 'Mentorship and startup resources section.',
			},
			{
				image: '/projects-screenshots/ecell-launchpad/3.png',
				caption: 'Featured startups showcase.',
			},
			{
				image: '/projects-screenshots/ecell-launchpad/4.png',
				caption: 'Community connection interface.',
			},
		],
		links: [
			{
				id: 1,
				title: 'React',
				href: 'https://react.dev/',
			},
			{
				id: 2,
				title: 'Tailwind',
				href: 'https://tailwindcss.com/',
			},
			{
				id: 3,
				title: 'Framer Motion',
				href: 'https://www.framer.com/motion/',
			},
			{
				id: 4,
				title: 'React Router',
				href: 'https://reactrouter.com/',
			},
		],
	},
];

// FAQ
export const FaqItems = [
	{
		id: 1,
		question: 'What technologies do you specialize in for web development?',
		title: 'Description',
		description:
			'We work with modern frameworks like React.js, Next.js, and Tailwind for frontend. For backend, we use Node.js or Laravel. Our database expertise spans SQL (PostgreSQL, MySQL) and NoSQL (MongoDB) or BaaS (Firebase, Supabase)',

		button: 'more',
	},
	{
		id: 2,
		question: 'Can you deploy applications to cloud platforms?',
		title: 'Description',
		description: 'Absolutely! We handle deployment on platforms like AWS, Google Cloud, and even serverless architectures like Vercel.',

		button: 'more',
	},
	{
		id: 3,
		question: 'Do you offer API development and integration services?',
		title: 'Description',
		description: 'Yes, we design and develop RESTful APIs, ensuring efficient data exchange. We also integrate third-party APIs for payment systems, social media, cloud services, and more.',

		button: 'more',
	},
	{
		id: 4,
		question: 'Can you migrate existing applications to the cloud?',
		title: 'Description',
		description: 'We specialize in cloud migrations, whether it’s rehosting, refactoring, or re-architecting your application for the cloud.',

		button: 'more',
	},
	{
		id: 5,
		question: 'How do you ensure scalability in your projects?',
		title: 'Description',
		description: 'We implement scalable architectures using microservices and containerization (e.g., Docker, Kubernetes).',

		button: 'more',
	},
	{
		id: 6,
		question: 'Do you provide performance optimization for web apps?',
		title: 'Description',
		description: 'Absolutely. We optimize load times, reduce server costs, and improve overall performance using techniques like caching, CDN integration, and database indexing.',

		button: 'more',
	},
	{
		id: 7,
		question: 'What’s your approach to testing and quality assurance?',
		title: 'Description',
		description: 'We use both automated and manual testing methods, including unit testing, integration testing, and load testing, to ensure your application performs flawlessly.',

		button: 'more',
	},
];

export const linksTree = [
	{
		name: 'Back to Website',
		url: '/',
		icon: Globe,
		newTab: false,
	},
	{
		name: 'LinkedIn',
		url: 'https://www.linkedin.com/in/ansh-verma-37504b2b7/',
		icon: Linkedin,
	},
	{
		name: 'GitHub',
		url: 'https://github.com/anshvermadev',
		icon: Github,
	},
	{
		name: 'Instagram',
		url: 'https://www.instagram.com/verma_07ansh/',
		icon: Instagram,
	},
	{
		name: 'Twitter',
		url: 'https://twitter.com/VERMA07ANSH',
		icon: Twitter,
	},
	{
		name: 'Gmail',
		url: 'https://mail.google.com/mail/?view=cm&to=verma.07ansh@gmail.com',
		icon: Mail,
	},
];

