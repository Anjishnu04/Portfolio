/** @type {import('next').NextConfig} */
const nextConfig = {
	devIndicators: false,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "images.unsplash.com",
			},
			{
				protocol: "https",
				hostname: "i.ibb.co",
			},
		],
	},
}

export default nextConfig
