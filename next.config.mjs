/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/voicebot-landing-page' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/voicebot-landing-page/' : '',
  images: {
    domains: ['picsum.photos'],
    unoptimized: true,
  },
};

export default nextConfig;
