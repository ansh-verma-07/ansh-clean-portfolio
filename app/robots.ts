import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: '*',
			allow: '/',
			disallow: '/api/',
		},
		sitemap: 'https://ansh-clean-portfolio.vercel.app/sitemap.xml',
	};
}
