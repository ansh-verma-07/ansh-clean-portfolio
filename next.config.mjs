/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: [
			'api.microlink.io', // Microlink Image Preview
		],
	},
	transpilePackages: [
		'@react-three/fiber',
		'@react-three/drei'
	],
};

export default nextConfig;
