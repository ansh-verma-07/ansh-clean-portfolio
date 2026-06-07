import './global.css';
import { Toaster } from 'sonner';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';
import { Metadata } from 'next';
import { DisableInteraction } from '@/components/DisableInteraction';
import { ClientLayout } from '@/components/ClientLayout';
import ToastContainer from '@/components/ui/ToastContainer';
import EasterEgg from '@/components/ui/EasterEgg';
import SmoothScroll from '@/components/SmoothScroll';
import { TransitionProvider } from '@/context/TransitionContext';

export const metadata: Metadata = {
	metadataBase: new URL('https://ansh-clean-portfolio.vercel.app'),
	title: {
		default: 'Ansh Verma | Full Stack Developer',
		template: '%s | Ansh Verma',
	},
	description: 'Ansh Verma is a full-stack developer who enjoys building well-structured web applications and turning ideas into practical, user-friendly products.',
	keywords: [
		'Ansh Verma',
		'Ansh Verma Developer',
		'Full Stack Developer',
		'React Developer',
		'Next.js Developer',
		'Software Engineer',
		'Portfolio',
	],
	authors: [{ name: 'Ansh Verma', url: 'https://github.com/anshvermadev' }],
	creator: 'Ansh Verma',
	alternates: {
		canonical: '/',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: 'https://ansh-clean-portfolio.vercel.app',
		title: 'Ansh Verma | Full Stack Developer',
		description: 'Ansh Verma is a full-stack developer who enjoys building well-structured web applications and turning ideas into practical, user-friendly products.',
		siteName: 'Ansh Verma Portfolio',
		images: [
			{
				url: '/logo.png',
				width: 1200,
				height: 630,
				alt: 'Ansh Verma Portfolio Logo',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Ansh Verma | Full Stack Developer',
		description: 'Ansh Verma is a full-stack developer who enjoys building well-structured web applications and turning ideas into practical, user-friendly products.',
		creator: '@VERMA07ANSH',
		images: ['/logo.png'],
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className="select-none">
				<TransitionProvider>
					<Toaster
						position="top-right"
						richColors
						closeButton
						duration={3000}
						toastOptions={{
							classNames: {
								toast: 'group toast bg-white text-black border-2 border-black shadow-lg rounded-xl font-NeueMontreal',
								title: 'text-base font-medium',
								description: 'text-sm text-black/60',
								actionButton: 'group-[.toast]:bg-black group-[.toast]:text-white',
								cancelButton: 'group-[.toast]:bg-neutral-200 group-[.toast]:text-neutral-500',
								closeButton: 'group-[.toast]:border-black/20 group-[.toast]:bg-white group-[.toast]:text-black',
								error: '!bg-red-50 !border-red-200 !text-red-800',
								success: '!bg-green-50 !border-green-200 !text-green-800',
								warning: '!bg-yellow-50 !border-yellow-200 !text-yellow-800',
								info: '!bg-blue-50 !border-blue-200 !text-blue-800',
							},
						}}
					/>
					<ToastContainer />
					<EasterEgg />
					{/* <DisableInteraction /> */}
					<SmoothScroll />
					<ClientLayout>{children}</ClientLayout>
					<SpeedInsights />
					<Analytics />
				</TransitionProvider>
			</body>
		</html>
	);
}
